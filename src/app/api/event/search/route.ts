import HttpResponses from '@/app/functions/API/HttpResponses';
import Authenticate from '@/app/functions/authentication/Authenticate';
import {
	getEventByHouse,
	getEventById,
	getEventByTitle,
} from '@/app/functions/entities/Event';
import { getHouseById } from '@/app/functions/entities/House';
import GetStreamData from '@/app/functions/util/GetStreamData';

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

	const { searchParams } = JSON.parse(body) as {
		searchParams: { value: string; property: 'id' | 'name' | 'house' };
	};

	if (!searchParams) {
		return new HttpResponses().BadRequest(
			'no search parameters were provided'
		);
	}

	if (!searchParams || !searchParams.value || !searchParams.property) {
		return new HttpResponses().BadRequest('Invalid Search Params');
	}

	const getFetchedEvents = async () => {
		switch (searchParams.property) {
			case 'id':
				return await getEventById(searchParams.value);
			case 'name':
				return await getEventByTitle(searchParams.value);
			case 'house':
				const house = await getHouseById(searchParams.value);

				if (!house)
					return new HttpResponses().BadRequest('House not found');

				return await getEventByHouse(house);

			default:
				break;
		}
	};

	const events = getFetchedEvents();

	return new HttpResponses().Ok({ message: 'OK', cache: { events } });
}

export {
	Handler as GET,
	Handler as POST,
	Handler as PUT,
	Handler as PATCH,
	Handler as DELETE,
};
