import { sign } from 'jsonwebtoken';

describe('Event Create Route Tests', () => {
	const url = `${process.env.ENVIRONMENT_URI}/api/event/create`;
	const validJWT = sign(
		{ id: 'test-user-id', username: 'username', displayName: 'username' },
		process.env.AUTH_SECRET as string
	);
	const deleteRoute = `${process.env.ENVIRONMENT_URI}/api/event/delete`;

	it('should only allow POST requests', async () => {
		const response = await fetch(url, {
			method: 'GET',
		});
		const data = (await response.json()).body.message;

		expect(data).toContain('method not allowed');
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
			method: 'POST',
			body,
		});
		const data = (await response.json()).body.message;

		expect(data).toContain('unauthorized');
	});
	it('should return Bad Request if the request body is empty', async () => {
		const response = await fetch(url, {
			method: 'POST',
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
	it('should return Bad Request if the request body event is missing', async () => {
		const body = JSON.stringify({ something: 'useless' });

		const response = await fetch(url, {
			method: 'POST',
			body,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
		});
		const data = (await response.json()).body.message;

		expect(data).toContain('bad request');
		expect(data).toContain('No event was provided');
	});
	it('should return Bad Request missing title if the request body event title is missing', async () => {
		const body = JSON.stringify({
			event: {
				description: 'Event Description',
				startDate: 'eventStartTime',
				endDate: 'eventEndTime',
				thumbnail: 'eventThumbnail',
			},
		});

		const response = await fetch(url, {
			method: 'POST',
			body,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
		});
		const data = (await response.json()).body.message;

		expect(data).toContain('bad request');
		expect(data).toContain('No event title was provided');
	});
	it('should return Bad Request missing start time if the request body event start time is missing', async () => {
		const body = JSON.stringify({
			event: {
				name: 'Event Title',
				description: 'Event Description',
				endDate: 'eventEndTime',
				thumbnail: 'eventThumbnail',
			},
		});

		const response = await fetch(url, {
			method: 'POST',
			body,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
		});
		const data = (await response.json()).body.message;

		expect(data).toContain('bad request');
		expect(data).toContain('No start time was provided');
	});
	it('should return Bad Request if no event owner is provived', async () => {
		const body = JSON.stringify({
			event: {
				name: 'Event Title',
				description: 'Event Description',
				startDate: '2024-01-24T21:28:15.772Z',
				endDate: '2024-01-24T21:28:14.772Z',
				thumbnail: 'eventThumbnail',
			},
		});

		const response = await fetch(url, {
			method: 'POST',
			body,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
		});
		const data = (await response.json()).body.message;

		expect(data).toContain('bad request');
		expect(data).toContain('No Event Owner was provided');
	});
	it('should return Bard Request if the event owner is not found in the user table', async () => {
		const body = JSON.stringify({
			event: {
				name: 'Event Title',
				description: 'Event Description',
				ownerID: 'someone',
				startDate: '2024-01-24T21:28:15.772Z',
				endDate: '2024-01-24T21:28:14.772Z',
				thumbnail: 'eventThumbnail',
			},
		});

		const response = await fetch(url, {
			method: 'POST',
			body,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
		});
		const data = (await response.json()).body.message;

		expect(data).toContain('bad request');
		expect(data).toContain('Event Owner not found');
	});
	it('should return Bad Request if the end time is before start time', async () => {
		const body = JSON.stringify({
			event: {
				name: 'Event Title',
				description: 'Event Description',
				startDate: '2024-01-24T21:28:15.772Z',
				endDate: '2024-01-24T21:28:14.772Z',
				thumbnail: 'eventThumbnail',
				ownerID: 'test-user-id',
			},
		});

		const response = await fetch(url, {
			method: 'POST',
			body,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
		});
		const data = (await response.json()).body.message;

		expect(data).toContain('End time cannot be before start time');
	});
	it('should return Bad Request if the event start time is past', async () => {
		const body = JSON.stringify({
			event: {
				name: 'Event Title',
				description: 'Event Description',
				startDate: '2020-01-24T21:28:15.772Z',
				thumbnail: 'eventThumbnail',
				ownerID: 'test-user-id',
			},
		});

		const response = await fetch(url, {
			method: 'POST',
			body,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
		});
		const data = (await response.json()).body.message;

		expect(data).toContain('bad request');
		expect(data).toContain('Event cannot start in the past');
	});
	it('should return Bad Request if the date time properties are not valid', async () => {
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
			method: 'POST',
			body,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
		});
		const data = (await response.json()).body.message;

		expect(data).toContain('bad request');
	});
	it('should create the event and return a success status if the provided body and auth bearer are correct', async () => {
		const event = {
			name: 'Event Title',
			description: 'Event Description',
			ownerID: 'test-user-id',
			startDate: '2024-11-24T21:28:15.772Z',
			endDate: '2024-11-25T21:28:15.772Z',
			thumbnail: 'eventThumbnail',
		};

		const body = JSON.stringify({ event });

		const response = await fetch(url, {
			method: 'POST',
			body,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
		});

		const data = (await response.json()).body;

		expect(data?.message).toContain('created successfully');
		expect(data?.event).not.toBeUndefined();
		expect(typeof data?.event.id).toBe('string');

		await fetch(deleteRoute, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${validJWT}`,
			},
			body: JSON.stringify({
				eventID: data?.event?.id,
			}),
		});
	});
});
