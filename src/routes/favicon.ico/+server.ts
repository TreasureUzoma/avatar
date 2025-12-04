import { error } from '@sveltejs/kit';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { generateDeterministicNumber } from '$lib/deterministic-hash';
import type { RequestHandler } from './$types.js';

export const GET: RequestHandler = async () => {
	// Generate random text for favicon
	const randomText = Math.random().toString(36).substring(7);
	const id = generateDeterministicNumber(randomText);

	// Construct file path
	const filePath = join(process.cwd(), 'static', 'avatars', `${id}.png`);

	// Check if file exists
	if (!existsSync(filePath)) {
		throw error(404, 'Avatar not found');
	}

	// Read the file
	const buffer = readFileSync(filePath);

	// Return the image
	return new Response(buffer, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'no-cache'
		}
	});
};
