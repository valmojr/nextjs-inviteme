import ContentContainer from '../../util/Divisions/ContentContainer';

export default async function SearchResults({
	search,
	type,
}: {
	search: string;
	type: 'event' | 'user' | 'house';
}) {
	const events = await fetch(
		`${process.env.ENVIRONMENT_URI}/api/events/search`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ type, search }),
		}
	);
	return (
		<ContentContainer className={'w-9/12 h-24'}>
			{/* events.map((event) => {
				return <div key={event.id}>{event.name}</div>;
			}) */}
		</ContentContainer>
	);
}
