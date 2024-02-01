import HttpResponses from '@/app/functions/API/HttpResponses';
import Authenticate from '@/app/functions/authentication/Authenticate';
import { getEventById, updateEvent } from '@/app/functions/entities/Event';
import GetStreamData from '@/app/functions/util/GetStreamData';
import { Event } from '@prisma/client';

async function Handler(req: Request) {
	if (req.method != 'POST') return new HttpResponses().UnauthorizedMethod();

	const token = req.headers.get('Authorization');

	if (!token) {
		return new HttpResponses().Unauthorized();
	}

	const user = await Authenticate(token);

	if (!user) {
		return new HttpResponses().Unauthorized();
	}

	const body = await GetStreamData(req?.body);

	if (!body || body == '{}') {
		return new HttpResponses().BadRequest('No body was provided');
	}

	const { event } = JSON.parse(body) as { event: Event };

	if (!event || !event.id) {
		return new HttpResponses().BadRequest(
			'No valid event properties were provided'
		);
	}

	const eventOnDatabase = await getEventById(event.id);

	const updatedEvent = await updateEvent({ ...eventOnDatabase, ...event });

	return new HttpResponses().Ok({ cache: updatedEvent });
}

export {
	Handler as GET,
	Handler as POST,
	Handler as PUT,
	Handler as PATCH,
	Handler as DELETE,
};
