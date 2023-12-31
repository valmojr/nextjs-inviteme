import DiscordUser from '@/app/functions/types/DiscordUser';

describe('Discord OAuth2 Authentication Tests', () => {
	const url = process.env.ENVIRONMENT_URI + '/api/auth/discord/me';

	const validUser: Partial<DiscordUser> = {
		id: '272181230myid52402567866',
		username: 'username',
		avatar: 'd1a29185tyuefba4myavatar946c00410vbhfc35',
		global_name: 'Username',
		email: 'my@email.com',
		banner_color: '#a12c2c',
	};

	it('should only allow POST request', async () => {
		const getResponse = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const getData = await getResponse.json();

		expect(getData.body.message).toEqual('method not allowed');

		const putResponse = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const putData = await putResponse.json();

		expect(putData.body.message).toEqual('method not allowed');

		const patchResponse = await fetch(url, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const patchData = await patchResponse.json();

		expect(patchData.body.message).toEqual('method not allowed');

		const deleteResponse = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const deleteData = await deleteResponse.json();

		expect(deleteData.body.message).toEqual('method not allowed');
	});
	it('should return bad request if the user is not provided', async () => {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({}),
		});

		const data = await response.json();

		expect(data.body.message).toEqual('bad request');
	});
	it('should return bad request if the user provides a invalid user', async () => {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ user: { id: '123' } }),
		});

		const data = await response.json();

		expect(data.body.message).toEqual('bad request');
	});
	it('should return ok if the user provided a valid user', async () => {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ user: validUser }),
		});

		const data = await response.json();

		expect(data.status).toEqual(200);
		expect(data.body.user.discordId).toEqual(validUser.id);
		expect(data.body.user.username).toEqual(validUser.username);
		expect(data.body.user.displayName).toEqual(validUser.global_name);
		expect(data.body.user.avatar).toEqual(validUser.avatar);
	});
	it('should return a valid json web token with the cookie', async () => {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ user: validUser }),
		});

		expect(response.headers.get('set-cookie')).toContain('token');
	});
});
