import HttpResponses from '@/app/functions/API/HttpResponses';
import GetTokenFromHeader from '@/app/functions/authentication/GetTokenFromHeader';
import GetStreamData from '@/app/functions/util/GetStreamData';

type EventData = {
	title: string;
	house: string;
	description?: string;
	startTime: Date;
	endTime?: Date;
	thumbnail?: string;
};

async function handler(req: Request) {
	if (req.method != 'POST') return new HttpResponses().UnauthorizedMethod();

	const body = await GetStreamData(req?.body);

	if (!body || body == '{}') {
		return new HttpResponses().BadRequest('No body was provided');
	}

	const { event } = JSON.parse(body);

	if (!event) {
		return new HttpResponses().BadRequest('No event was provided');
	}

	if (!event.title) {
		return new HttpResponses().BadRequest('No title was provided');
	}

	if (!event.house) {
		return new HttpResponses().BadRequest('No house id was provided');
	}

	if (!event.startTime) {
		return new HttpResponses().BadRequest('No start time was provided');
	}

	return new HttpResponses().Ok({
		message: `Event ${event.title} created successfully`,
	});
}

export {
	handler as GET,
	handler as POST,
	handler as PATCH,
	handler as PUT,
	handler as DELETE,
};
