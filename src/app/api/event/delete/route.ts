import HttpResponses from '@/app/functions/API/HttpResponses';
import Authenticate from '@/app/functions/authentication/Authenticate';
import { getEventById, removeEvent } from '@/app/functions/entities/Event';
import GetStreamData from '@/app/functions/util/GetStreamData';

async function handler(req: Request) {
	if (req.method != 'DELETE') return new HttpResponses().UnauthorizedMethod();

	const token = req.headers.get('Authorization');

	const user = await Authenticate(token);

	if (!user) {
		return new HttpResponses().Unauthorized();
	}

	const body = await GetStreamData(req?.body);

	if (!body || body == '{}') {
		return new HttpResponses().BadRequest('No body was provided');
	}

	const { eventID } = JSON.parse(body) as { eventID: string };

	if (!eventID) {
		return new HttpResponses().BadRequest('No event ID was provided');
	}

	const event = await getEventById(eventID);

	if (!event) {
		return new HttpResponses().BadRequest('Event does not exist');
	}

	if (event.ownerID != user.id) {
		return new HttpResponses().Unauthorized();
	}

	const deletedEvent = await removeEvent(eventID);

	return new HttpResponses().Ok({
		message: `Event ${deletedEvent.name} was deleted`,
	});
}

export {
	handler as GET,
	handler as POST,
	handler as PATCH,
	handler as PUT,
	handler as DELETE,
};
