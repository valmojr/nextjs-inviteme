import { User } from '@prisma/client';
import { randomUUID } from 'crypto';
import { sign } from 'jsonwebtoken';

describe('JWT authorization tests', () => {
	const url = process.env.ENVIRONMENT_URI + '/api/auth/check';

	const validUser: User = {
		id: randomUUID(),
		discordId: '272187905240203266',
		createdAt: new Date(),
		updatedAt: new Date(),
		username: 'valmo',
		avatar: 'd1a29185016efba4946c004108c9fc35',
		displayName: 'Valmo',
		email: null,
		password: null,
		bannerColor: '#a12c2c',
	};

	const invalidUser = {
		id: '272187905240203266',
		createdAt: new Date(),
		updatedAt: new Date(),
		password: null,
	};

	const validJWT = sign(validUser, process.env.AUTH_SECRET as string);

	const invalidJWT = sign(invalidUser, process.env.AUTH_SECRET as string);

	test('should only allow POST request', async () => {
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

	test('should return unauthorized if JWT not provided', async () => {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();

		expect(data.body.message).toEqual('unauthorized');
	});

	test('should return unauthorized if JWT is invalid', async () => {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ token: 'invalid' }),
		});

		const data = await response.json();

		expect(data.body.message).toEqual('unauthorized');
	});

	test('should return unauthorized if the JWT doest result in a valid user', async () => {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ token: invalidJWT }),
		});

		const data = await response.json();

		expect(data.body.message).toEqual('unauthorized');
	});
});
