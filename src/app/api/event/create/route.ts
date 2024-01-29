import HttpResponses from '@/app/functions/API/HttpResponses';
import Authenticate from '@/app/functions/authentication/Authenticate';
import { createEvent } from '@/app/functions/entities/Event';
import { createGroup, updateGroup } from '@/app/functions/entities/Group';
import { createRole } from '@/app/functions/entities/Role';
import { getUserById } from '@/app/functions/entities/User';
import GetStreamData from '@/app/functions/util/GetStreamData';
import { Event } from '@prisma/client';
import { randomUUID } from 'crypto';

async function handler(req: Request) {
	if (req.method != 'POST') return new HttpResponses().UnauthorizedMethod();

	const token = req.headers.get('Authorization');

	const user = await Authenticate(token);

	if (!user) {
		return new HttpResponses().Unauthorized();
	}

	const body = await GetStreamData(req?.body);

	if (!body || body == '{}') {
		return new HttpResponses().BadRequest('No body was provided');
	}

	const { event } = JSON.parse(body) as { event: Event };

	if (!event) {
		return new HttpResponses().BadRequest('No event was provided');
	}

	if (!event.name) {
		return new HttpResponses().BadRequest('No event title was provided');
	}

	if (!event.startDate) {
		return new HttpResponses().BadRequest('No start time was provided');
	}

	if (!event.ownerID) {
		return new HttpResponses().BadRequest('No Event Owner was provided');
	}

	const eventOwner = await getUserById(event.ownerID);

	if (!eventOwner) {
		return new HttpResponses().BadRequest('Event Owner not found');
	}

	if (event.endDate && event.startDate > event.endDate) {
		return new HttpResponses().BadRequest(
			'End time cannot be before start time'
		);
	}

	const todayMidnight = new Date();
	todayMidnight.setHours(0, 0, 0, 0);

	const eventStartDateMidnight = new Date(event.startDate);
	eventStartDateMidnight.setHours(0, 0, 0, 0);

	if (eventStartDateMidnight < todayMidnight) {
		return new HttpResponses().BadRequest('Event cannot start in the past');
	}

	const eventId = randomUUID();

	const eventMainGroup = await createGroup({
		id: `${randomUUID()}`,
		createdAt: new Date(),
		updatedAt: new Date(),
		name: `${event.name} Main Group`,
		fatherGroupID: null,
		roleIDs: [],
	});

	const ownerRole = await createRole({
		id: `${randomUUID()}`,
		createdAt: new Date(),
		updatedAt: new Date(),
		userId: null,
		groupID: eventMainGroup.id,
		name: 'Owner',
	});

	await updateGroup({
		...eventMainGroup,
		roleIDs: [ownerRole.id],
	});

	const createdEvent = await createEvent({
		...event,
		id: eventId,
		createdAt: new Date(),
		updatedAt: new Date(),
		ownerID: null,
		mainGroupID: eventMainGroup.id,
	});

	return new HttpResponses().Created({
		message: `Event ${createdEvent.id} created successfully`,
		event: createdEvent,
	});
}

export {
	handler as GET,
	handler as POST,
	handler as PATCH,
	handler as PUT,
	handler as DELETE,
};
