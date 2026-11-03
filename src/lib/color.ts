/**
 * Parses a hex colour given as "1e293b", "#1e293b" or the short form "fff" and returns
 * it as "#rrggbb", or null when the value is not a valid 3 or 6 digit hex colour.
 */
export const parseHexColor = (value: string) => {
	const hex = value.trim().replace(/^#/, '').toLowerCase();

	if (/^[0-9a-f]{3}$/.test(hex)) {
		return `#${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
	}
	if (/^[0-9a-f]{6}$/.test(hex)) {
		return `#${hex}`;
	}
	return null;
};

const channel = (value: number) => {
	const c = value / 255;
	return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
};

/** WCAG relative luminance (0 = black, 1 = white) of a "#rrggbb" colour. */
export const relativeLuminance = (hex: string) => {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);
	return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};

/** Picks black or white, whichever has the higher WCAG contrast on the given background. */
export const readableTextColor = (background: string) => {
	const luminance = relativeLuminance(background);
	const contrastWithWhite = 1.05 / (luminance + 0.05);
	const contrastWithBlack = (luminance + 0.05) / 0.05;
	return contrastWithWhite >= contrastWithBlack ? '#ffffff' : '#000000';
};
