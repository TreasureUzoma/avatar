export const config = {
	runtime: 'edge'
};

import { error } from '@sveltejs/kit';
import { generateDeterministicNumber } from '$lib/deterministic-hash';
import type { RequestHandler } from './$types.js';

export const GET: RequestHandler = async ({ params, fetch }) => {
	// Get the catch-all path segments
	const text = params.text || '';

	// Block empty path if needed
	if (!text || text.trim() === '') {
		throw error(400, 'Missing required path segments (e.g., /username).');
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

	// Return the image with proper headers
	return new Response(buffer, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable'
		}
	});
};
