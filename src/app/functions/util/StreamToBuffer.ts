export default function getStreamData(
	readableStream: ReadableStream<Uint8Array> | null
): Promise<string> {
	if (!readableStream) {
		throw new Error('undefined stream');
	}
	const reader = readableStream.getReader();

	return new Promise((resolve, reject) => {
		const chunks: Uint8Array[] = [];

		async function pump(): Promise<void> {
			return reader.read().then(({ done, value }) => {
				if (done) {
					const buffer = Buffer.concat(chunks);

					resolve(buffer.toString('utf8'));
					return;
				}

				if (value) {
					chunks.push(value);
				}

				return pump();
			});
		}

		pump().catch(reject);
	});
}
