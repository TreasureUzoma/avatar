export const config = {
	runtime: 'edge'
};

import { error } from '@sveltejs/kit';
import { generateDeterministicNumber } from '$lib/deterministic-hash';
import { parseHexColor } from '$lib/color';
import { getInitials } from '$lib/initials';
import { buildInitialsSvg } from '$lib/initials-svg';
import type { RequestHandler } from './$types.js';

export const GET: RequestHandler = async ({ params, fetch, url }) => {
	// Get the catch-all path segments
	const text = params.text || '';

	// Block empty path if needed
	if (!text || text.trim() === '') {
		throw error(400, 'Missing required path segments (e.g., /username).');
	}

	const withInitials = url.searchParams.get('format') === 'text';

	// ?color and ?bg only apply to the initials version, as hex like ff8800 or %23ff8800
	let color: string | undefined;
	let bg: string | undefined;
	if (withInitials) {
		for (const name of ['color', 'bg'] as const) {
			const value = url.searchParams.get(name);
			if (value === null) continue;

			const parsed = parseHexColor(value);
			if (!parsed) {
				throw error(400, `Invalid ${name}: use a hex colour like ff8800, #ff8800 or f80.`);
			}
			if (name === 'color') color = parsed;
			else bg = parsed;
		}

		// A solid background replaces the avatar image, so there is nothing to fetch
		if (bg) {
			return new Response(buildInitialsSvg({ initials: getInitials(text), bg, color }), {
				headers: {
					'Content-Type': 'image/svg+xml; charset=utf-8',
					'Cache-Control': 'public, max-age=31536000, immutable'
				}
			});
		}
	}

	// Generate deterministic avatar ID from text
	const id = generateDeterministicNumber(text);

	// Fetch the avatar from static folder
	const avatarUrl = `/avatars/${id}.png`;

	const response = await fetch(avatarUrl);

	// Check if file exists
	if (!response.ok) {
		throw error(404, 'Avatar not found');
	}

	// Get the image buffer
	const buffer = await response.arrayBuffer();

	// ?format=text draws the initials on top of the same avatar
	if (withInitials) {
		return new Response(buildInitialsSvg({ initials: getInitials(text), png: buffer, color }), {
			headers: {
				'Content-Type': 'image/svg+xml; charset=utf-8',
				'Cache-Control': 'public, max-age=31536000, immutable'
			}
		});
	}

	// Return the image with proper headers
	return new Response(buffer, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable'
		}
	});
};
