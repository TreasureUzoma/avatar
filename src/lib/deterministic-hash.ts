export const generateDeterministicNumber = (inputString: string) => {
	let hash = 0;
	for (let i = 0; i < inputString.length; i++) {
		const char = inputString.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash |= 0;
	}

	return (Math.abs(hash) % 50) + 1;
};
