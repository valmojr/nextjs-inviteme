import { sign } from 'jsonwebtoken';

describe('Event Search Route Tests', () => {
	const url = `${process.env.ENVIRONMENT_URI}/api/event/search`;
	const validJWT = sign(
		{ id: 'test-user-id', username: 'username', displayName: 'username' },
		process.env.AUTH_SECRET as string
	);

	it('should only allow POST requests', async () => {
		{
			const response = await fetch(url, {
				method: 'GET',
			});
			const data = (await response.json()).body.message;
			expect(data).toContain('method not allowed');
		}
		{
			const response = await fetch(url, {
				method: 'POST',
			});
			const data = (await response.json()).body.message;
			expect(data).not.toContain('method not allowed');
		}
		{
			const response = await fetch(url, {
				method: 'PATCH',
			});
			const data = (await response.json()).body.message;
			expect(data).toContain('method not allowed');
		}
		{
			const response = await fetch(url, {
				method: 'PUT',
			});
			const data = (await response.json()).body.message;
			expect(data).toContain('method not allowed');
		}
		{
			const response = await fetch(url, {
				method: 'DELETE',
			});
			const data = (await response.json()).body.message;
			expect(data).toContain('method not allowed');
		}
	});
	it("should return unauthorized if the user doesn't provide any JWT", async () => {
		const body = JSON.stringify({ something: 'useless' });

		const response = await fetch(url, {
			method: 'POST',
			body,
		});

		const data = (await response.json())?.body;

		expect(data?.message).toContain('unauthorized');
	});
	it("should return unauthorized if the user doesn't provide a valid JWT", async () => {
		const body = JSON.stringify({ something: 'useless' });

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'invalidJWT',
			},
			body,
		});

		const data = (await response.json())?.body;

		expect(data?.message).toContain('unauthorized');
	});
	it('should return Bad Request if the request body is empty', async () => {
		const body = JSON.stringify({});

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
			body,
		});

		const data = (await response.json())?.body;

		expect(data?.message).toContain('bad request');
	});
	it("should return Bad Request if the request body doesn't have the correct params", async () => {
		const body = JSON.stringify({ something: 'useless' });

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
			body,
		});

		const data = (await response.json())?.body;

		expect(data?.message).toContain('bad request');
		expect(data?.message).toContain('no search parameters were provided');
	});
	it('should return a event array if the correct params are provided', async () => {
		const body = JSON.stringify({
			searchParams: { value: 'event', property: 'name' },
		});

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
			body,
		});

		const data = (await response.json())?.body;

		expect(data?.message).toContain('OK');
	});
});
