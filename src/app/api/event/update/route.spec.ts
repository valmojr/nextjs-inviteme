import { sign } from 'jsonwebtoken';

describe('Event Update Route Tests', () => {
	const url = `${process.env.ENVIRONMENT_URI}/api/event/update`;
	const createRoute = `${process.env.ENVIRONMENT_URI}/api/event/create`;
	const deleteRoute = `${process.env.ENVIRONMENT_URI}/api/event/delete`;

	const validJWT = sign(
		{ id: 'test-user-id', username: 'username', displayName: 'username' },
		process.env.AUTH_SECRET as string
	);
	const notEventOwnerJWT = sign(
		{
			id: 'not-the-event-owner',
			username: 'nottheeventowner',
			displayName: 'notTheEventOwner',
		},
		process.env.AUTH_SECRET as string
	);

	it('should only allow PATCH requests', async () => {
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
				method: 'PUT',
			});
			const data = (await response.json()).body.message;

			expect(data).toContain('method not allowed');
		}
		{
			const response = await fetch(url, {
				method: 'PATCH',
			});
			const data = (await response.json()).body.message;

			expect(data).not.toContain('method not allowed');
		}
		{
			const response = await fetch(url, {
				method: 'DELETE',
			});
			const data = (await response.json()).body.message;

			expect(data).toContain('method not allowed');
		}
	});
	it("should return unauthorized if the user doesn't provide a valid JWT", async () => {
		const body = JSON.stringify({
			event: {
				name: 'Event Title',
				description: 'Event Description',
				startDate: 'eventStartTime',
				endDate: 'eventEndTime',
				thumbnail: 'eventThumbnail',
			},
		});

		const response = await fetch(url, {
			method: 'PATCH',
			body,
		});
		const data = (await response.json()).body.message;

		expect(data).toContain('unauthorized');
	});
	it('should return Bad Request if the request body is empty', async () => {
		const response = await fetch(url, {
			method: 'PATCH',
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
	it('should return Bad Request if the request body event is missing the right params', async () => {
		const body = JSON.stringify({ something: 'useless' });

		const response = await fetch(url, {
			method: 'PATCH',
			body,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
		});
		const data = (await response.json()).body.message;

		expect(data).toContain('bad request');
		expect(data).toContain('No valid event properties were provided');
	});
	it('should return Unauthorized if the event owner provided is not the same as the original event owner', async () => {
		const event = {
			name: 'Event Title',
			description: 'Event Description',
			startDate: '2024-11-24T21:28:15.772Z',
			endDate: '2024-11-25T21:28:15.772Z',
			thumbnail: 'eventThumbnail',
		};

		const body = JSON.stringify({ event });

		const response = await fetch(url, {
			method: 'PATCH',
			body,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${notEventOwnerJWT}`,
			},
		});

		const data = (await response.json()).body;

		expect(data?.message).toContain('unauthorized');
	});
	it('should return Bad Request if the end time is before start time', async () => {
		const createBody = JSON.stringify({
			event: {
				name: 'Event Title',
				description: 'Event Description',
				ownerID: 'test-user-id',
				startDate: '2025-02-24T21:28:15.772Z',
				endDate: '2025-02-24T21:28:21.772Z',
				thumbnail: 'eventThumbnail',
			},
		});

		const createResponse = await fetch(createRoute, {
			method: 'POST',
			body: createBody,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
		});

		const createData = await createResponse.json();

		const { event } = createData?.body;

		const body = JSON.stringify({
			event: {
				...(await event),
				name: 'New Event Title',
				description: 'Event Description',
				startDate: '2024-03-24T21:28:15.772Z',
				endDate: '2024-03-24T21:28:14.772Z',
				thumbnail: 'eventThumbnail',
				ownerID: 'test-user-id',
			},
		});

		const response = await fetch(url, {
			method: 'PATCH',
			body,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
		});
		const data = await response.json();

		expect(data?.body?.message).toContain('bad request');
		expect(data?.body?.message).toContain(
			'End time cannot be before start time'
		);

		await fetch(deleteRoute, {
			method: 'DELETE',
			body: JSON.stringify({ eventID: event.id }),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
		});
	});
	it('should return Bad Request if the event start time is past', async () => {
		const createBody = JSON.stringify({
			event: {
				name: 'Event Title',
				description: 'Event Description',
				ownerID: 'test-user-id',
				startDate: '2025-02-24T21:28:15.772Z',
				endDate: '2025-02-24T21:28:21.772Z',
				thumbnail: 'eventThumbnail',
			},
		});

		const createResponse = await fetch(createRoute, {
			method: 'POST',
			body: createBody,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
		});

		const createData = await createResponse.json();

		const { event } = createData?.body;

		const body = JSON.stringify({
			event: {
				...(await event),
				name: 'New Event Title',
				description: 'Event Description',
				startDate: '2021-03-24T21:28:15.772Z',
				endDate: '2024-03-24T21:28:14.772Z',
				thumbnail: 'eventThumbnail',
				ownerID: 'test-user-id',
			},
		});

		const response = await fetch(url, {
			method: 'PATCH',
			body,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
		});
		const data = await response.json();

		expect(data?.body?.message).toContain('bad request');
		expect(data?.body?.message).toContain('Event cannot start in the past');

		await fetch(deleteRoute, {
			method: 'DELETE',
			body: JSON.stringify({ eventID: event.id }),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
		});
	});
	it('should update the event and return a success status if the provided body and auth bearer are correct', async () => {
		const createBody = JSON.stringify({
			event: {
				name: 'Event Title',
				description: 'Event Description',
				ownerID: 'test-user-id',
				startDate: '2025-02-24T21:28:15.772Z',
				endDate: '2025-02-24T21:28:21.772Z',
				thumbnail: 'eventThumbnail',
			},
		});

		const createResponse = await fetch(createRoute, {
			method: 'POST',
			body: createBody,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
		});

		const createData = await createResponse.json();

		const { event } = createData?.body;

		const body = JSON.stringify({
			event: {
				...(await event),
				name: 'New Event Title',
				description: 'New Event Description',
				startDate: '2025-03-24T21:28:15.772Z',
				endDate: '2025-04-24T21:28:14.772Z',
				thumbnail: 'eventThumbnail',
				ownerID: 'test-user-id',
			},
		});

		const response = await fetch(url, {
			method: 'PATCH',
			body,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
		});
		const data = await response.json();

		expect(data?.body?.status).toBe(200);
		expect(data?.body?.message).toContain('Event updated succefully');
		expect(data?.body?.cache?.event).toBeDefined();
		expect(data?.body?.cache?.event.id).toBeDefined();
		expect(data?.body?.cache?.event.name).toContain('New Event Title');
		expect(data?.body?.cache?.event.description).toContain(
			'New Event Description'
		);
		await fetch(deleteRoute, {
			method: 'DELETE',
			body: JSON.stringify({ eventID: event.id }),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
		});
	});
});
