import { assignedEvents } from '@/app/functions/mock/mock_data';
import Card from './Card';
import { Event } from '@prisma/client';
import Avatar from '../util/avatar';

export default async function IncomingEvents() {
	const events = assignedEvents;

	const getCloserEvent = (events: Event[]) => {
		let closerEvent = events[0];
		events.forEach((event) => {
			if (event.startDate < closerEvent.startDate) {
				closerEvent = event;
			}
		});
		return closerEvent;
	};

	if (events.length == 1) {
		return (
			<>
				<Card
					event={events[0]}
					type={'hero_event'}
					showTimeLeft={true}
				/>
			</>
		);
	} else {
		const closestEvent = getCloserEvent(events);
		<Avatar image={'https://i.imgur.com/8Km9tLL.png'} />;

		const closeEvents = events.filter(
			(event) => event.id !== closestEvent.id
		);

		return (
			<div className={'flex flex-col flex-nowrap gap-2'}>
				<Card
					event={closestEvent}
					type={'hero_event'}
					showTimeLeft={true}
					key={closestEvent.id}
				/>
				<div className={'flex flex-row flex-wrap gap-2'}>
					{closeEvents.map((event) => (
						<Card event={event} type={'medium'} key={event.id} />
					))}
				</div>
			</div>
		);
	}
}
