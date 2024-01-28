import { Event } from '@prisma/client';
import ContentContainer from '../../util/Divisions/ContentContainer';

export default async function SearchResults({
	search,
	type,
}: {
	search: string;
	type: 'event' | 'user' | 'house';
}) {
	const response = await fetch(
		`${process.env.ENVIRONMENT_URI}/api/events/search`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ type, search }),
		}
	);
	/*
	const events = JSON.stringify(await response.json());

	return (
		<ContentContainer className={'w-9/12 h-24'}>
			{events.map((event: Event) => {
				return <div key={event.id}>{event.name}</div>;
			})}
		</ContentContainer>
	); */
	return <h1>{'Hello World!'}</h1>;
}
