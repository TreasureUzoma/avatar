const SEPARATORS = /[\s\-_.+@]+/;

const firstChar = (word: string) => Array.from(word)[0] ?? '';

/**
 * Returns up to two upper-cased initials for a name: the first letter of the first
 * and last word. "john doe" -> "JD", "treasure" -> "T", "ada-lovelace_x" -> "AX".
 * Falls back to "?" when the input has no letters or numbers.
 */
export const getInitials = (name: string) => {
	const words = name
		.split(SEPARATORS)
		.map((word) => word.replace(/[^\p{L}\p{N}]/gu, ''))
		.filter(Boolean);

	if (words.length === 0) return '?';

	const first = firstChar(words[0]);
	const last = words.length > 1 ? firstChar(words[words.length - 1]) : '';

	return (first + last).toUpperCase();
};
