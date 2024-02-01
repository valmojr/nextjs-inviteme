import { sign } from 'jsonwebtoken';

describe('Event Delete Route Tests', () => {
	const url = `${process.env.ENVIRONMENT_URI}/api/event/delete`;
	const createRoute = `${process.env.ENVIRONMENT_URI}/api/event/create`;
	const validJWT = sign(
		{ id: 'test-user-id', username: 'username', displayName: 'username' },
		process.env.AUTH_SECRET as string
	);

	it('should only allow DELETE requests', async () => {
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
			expect(data).toContain('method not allowed');
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
			expect(data).not.toContain('method not allowed');
		}
	});
	it("should return unauthorized if the user doesn't provide a valid bearer token", async () => {
		const body = JSON.stringify({
			eventID: 'eventID',
		});

		const response = await fetch(url, {
			method: 'DELETE',
			body,
		});
		const data = (await response.json()).body.message;

		expect(data).toContain('unauthorized');
	});
	it('should not allow any request without a token bearer', async () => {
		const body = JSON.stringify({
			eventID: 'eventID',
		});

		const response = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body,
		});
		const data = (await response.json()).body.message;

		expect(data).toContain('unauthorized');
	});
	it('should return Bad Request if the request body is empty', async () => {
		const response = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
			body: JSON.stringify({}),
		});
		const data = (await response.json()).body.message;

		expect(data).toContain('bad request');
		expect(data).toContain('No body was provided');
	});
	it('should return Bad Request if the eventID is not provided', async () => {
		const response = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
			body: JSON.stringify({}),
		});
		const data = (await response.json()).body.message;

		expect(data).toContain('bad request');
	});
	it('should return Bad Request if the event does not exist', async () => {
		const response = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
			body: JSON.stringify({
				eventID: 'eventID',
			}),
		});
		const data = (await response.json()).body.message;

		expect(data).toContain('bad request');
	});
	it('should return Success if the event was deleted', async () => {
		const createResponse = await fetch(createRoute, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
			body: JSON.stringify({
				event: {
					name: 'Test Event',
					description: 'Event Description',
					ownerID: 'test-user-id',
					startDate: '2025-01-01T00:00:00.000Z',
				},
			}),
		});

		const createData = await createResponse.json();
		const { event } = createData.body;

		const response = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
			body: JSON.stringify({
				eventID: event.id,
			}),
		});

		const data = (await response.json()).body;

		expect(data?.message).toContain(event.name);
		expect(data?.message).toContain('was deleted');
	});
});
