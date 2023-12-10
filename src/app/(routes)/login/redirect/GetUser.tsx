'use server';

export default async function GetUser({ code }: { code: string }) {
	const API_ENDPOINT = 'https://discord.com/api/oauth2/token';

	async function refreshToken(code: string): Promise<any> {
		const body = new URLSearchParams({
			client_id: `${process.env.DISCORD_CLIENT_ID}`,
			client_secret: `${process.env.DISCORD_CLIENT_SECRET}`,
			grant_type: 'authorization_code',
			code,
			redirect_uri: `${process.env.DISCORD_OAUTH2_URL}`,
		});

		const headers = {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Accept-Encoding': 'application/x-www-form-urlencoded',
		};

		const response = await fetch(`${API_ENDPOINT}`, {
			method: 'POST',
			body,
			headers,
		});

		if (!response.ok) {
			throw new Error(`Failed to refresh token: ${response.status}`);
		}

		return await response.json();
	}

	return (
		<>
			<p>{refreshToken(code)}</p>
		</>
	);
}
