import { readableTextColor, relativeLuminance } from '$lib/color';

const SIZE = 512;

// Every avatar in static/avatars is a light pastel gradient. Measured over the area where
// the initials sit, black text has the best contrast on all 50 of them (worst pixel 3.1:1,
// median 5.1:1), white text is always worse. The soft glow keeps the letters readable over
// the darkest blobs. Re-check this if a darker avatar is ever added.
const DEFAULT_TEXT_COLOR = '#000000';

const toBase64 = (buffer: ArrayBuffer) => {
	const bytes = new Uint8Array(buffer);
	let binary = '';
	const chunk = 0x8000;
	for (let i = 0; i < bytes.length; i += chunk) {
		binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
	}
	return btoa(binary);
};

const escapeXml = (value: string) =>
	value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

type InitialsSvgOptions = {
	initials: string;
	/** The avatar PNG, used as the background unless `bg` is set. */
	png?: ArrayBuffer;
	/** Solid "#rrggbb" background that replaces the avatar image. */
	bg?: string;
	/** "#rrggbb" text colour. Defaults to whichever of black/white reads best. */
	color?: string;
};

/**
 * Returns the avatar with the initials centred on top, as a self-contained SVG
 * (any image is embedded, so it also works inside an <img> tag).
 */
export const buildInitialsSvg = ({ initials, png, bg, color }: InitialsSvgOptions) => {
	const text = escapeXml(initials);
	const fontSize = Array.from(initials).length > 1 ? 210 : 260;

	const textColor = color ?? (bg ? readableTextColor(bg) : DEFAULT_TEXT_COLOR);
	// The glow is the opposite of the text so the letters stay readable on busy backgrounds
	const glowColor = relativeLuminance(textColor) > 0.4 ? '#000' : '#fff';

	const background = bg
		? `<rect width="${SIZE}" height="${SIZE}" fill="${bg}"/>`
		: `<image href="data:image/png;base64,${toBase64(png!)}" width="${SIZE}" height="${SIZE}" preserveAspectRatio="xMidYMid slice"/>`;

	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}" width="${SIZE}" height="${SIZE}" role="img" aria-label="${text}">
<defs>
<filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
<feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="${glowColor}" flood-opacity="0.6"/>
</filter>
</defs>
${background}
<text x="${SIZE / 2}" y="${SIZE / 2}" text-anchor="middle" dominant-baseline="central" fill="${textColor}" font-family="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="${fontSize}" font-weight="700" letter-spacing="-4" filter="url(#glow)">${text}</text>
</svg>`;
};
