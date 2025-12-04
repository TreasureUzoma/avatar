import { error } from '@sveltejs/kit';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { meta } from '$lib/meta';
import { generateDeterministicNumber } from '$lib/deterministic-hash';
import type { RequestHandler } from './$types.js';

export const GET: RequestHandler = async ({ params }) => {
	// Get the catch-all path segments
	const text = params.text || meta.developer.nickname;

	// Block empty path if needed
	if (!params.text || params.text.trim() === '') {
		throw error(400, 'Missing required path segments (e.g., /username).');
	}

	// Generate deterministic avatar ID from text
	const id = generateDeterministicNumber(text);

	// Construct file path
	const filePath = join(process.cwd(), 'static', 'avatars', `${id}.png`);

	// Check if file exists
	if (!existsSync(filePath)) {
		throw error(404, 'Avatar not found');
	}

	// Read the file
	const buffer = readFileSync(filePath);

	// Return the image with proper headers
	return new Response(buffer, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable'
		}
	});
};
