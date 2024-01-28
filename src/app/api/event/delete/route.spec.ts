describe('Event Delete Route Tests', () => {
	const url = `${process.env.ENVIRONMENT_URI}/api/event/delete`;
	const createRoute = `${process.env.ENVIRONMENT_URI}/api/event/create`;
	const validJWT = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE3NzE3Y2NmLTJmMGMtNDQxOS1hZWVlLWI2OWIxNThhZDIzYSIsImRpc2NvcmRJZCI6IjI3MjE4NzkwNTI0MDIwMzI2NiIsImNyZWF0ZWRBdCI6IjIwMjQtMDEtMDNUMDU6NDY6MjcuOTU4WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDEtMDNUMDU6NDY6MjcuOTU4WiIsInVzZXJuYW1lIjoidmFsbW8iLCJkaXNwbGF5TmFtZSI6IlZhbG1vIiwicGFzc3dvcmQiOm51bGwsImF2YXRhciI6ImQxYTI5MTg1MDE2ZWZiYTQ5NDZjMDA0MTA4YzlmYzM1IiwiZW1haWwiOiJ2YWxfbW9fanJAaG90bWFpbC5jb20iLCJiYW5uZXJDb2xvciI6IiNhMTJjMmMiLCJpYXQiOjE3MDQyNjEzODd9.QnexRemtoTq359GPIoo3Mqn-yostgNrGv6qSZHVlE0Y`;

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
	it('should return Ok if the event was deleted', async () => {
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

		const data = (await response.json()).body.message;
		expect(data).toContain('ok');
		expect(data).toContain('was deleted');
	});
});
