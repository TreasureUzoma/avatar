import { error } from '@sveltejs/kit';
import { generateDeterministicNumber } from '$lib/deterministic-hash';
import type { RequestHandler } from './$types.js';

export const GET: RequestHandler = async ({ fetch }) => {
	// Generate random text for favicon
	const randomText = Math.random().toString(36).substring(7);
	const id = generateDeterministicNumber(randomText);

	// Fetch the avatar from static folder
	const avatarUrl = `/avatars/${id}.png`;
	const response = await fetch(avatarUrl);

	// Check if file exists
	if (!response.ok) {
		throw error(404, 'Avatar not found');
	}

	// Get the image buffer
	const buffer = await response.arrayBuffer();

	// Return the image
	return new Response(buffer, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'no-cache'
		}
	});
};
