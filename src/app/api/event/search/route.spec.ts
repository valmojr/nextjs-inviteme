describe('Event Search Route Tests', () => {
	const url = `${process.env.ENVIRONMENT_URI}/api/event/search`;
	test('should only allow POST requests', async () => {
		const response = await fetch(url, {});
		console.log(response);
		expect(response).toContain('Unautorized');
	});
	test('should return unauthorized if the user doest provide a valid JWT', async () => {
		const response = await fetch(url, {});

		expect(response).toContain('Unautorized');
	});
	test('should return Bad Request if the request body doesnt have the correct params', async () => {
		const response = await fetch(url, {});

		expect(response).toContain('Unautorized');
	});
	test('should return a event array if the correct params are provided', async () => {
		const response = await fetch(url, {});

		expect(response).toContain('ok');
	});
});
