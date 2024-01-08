import HttpResponses from '@/app/functions/API/HttpResponses';
import { getEventByTitle } from '@/app/functions/entities/Event';
import { getHouseByName } from '@/app/functions/entities/House';
import { getUserByName } from '@/app/functions/entities/User';
import GetStreamData from '@/app/functions/util/GetStreamData';

async function Handler(req: Request) {
	const { type, search } = JSON.parse(await GetStreamData(req?.body)) as {
		type: 'event' | 'user' | 'house';
		search: string;
	};
	switch (type) {
		case 'event':
			return getEventByTitle(search);
		case 'user':
			return getUserByName(search);
		case 'house':
			return getHouseByName(search);
		default:
			throw new Error('Invalid Search Type');
	}
}

export { Handler as POST };

function UnauthorizedMethod() {
	return new HttpResponses().UnauthorizedMethod();
}

export {
	UnauthorizedMethod as GET,
	UnauthorizedMethod as PUT,
	UnauthorizedMethod as PATCH,
	UnauthorizedMethod as DELETE,
};
