import { avaliableEvents } from '@/app/functions/mock/mock_data';
import { Event } from '@prisma/client';
import Image from 'next/image';
import { ComponentProps } from 'react';

export function AvaliableEventCard(
	props: { event: Event } & ComponentProps<'div'>
) {
	return (
		<div
			className={
				'flex flex-row flex-nowrap items-center justify-center gap-2 shadow-lg rounded-md p-2 bg-gradient-to-t from-neutral-700 via-neutral-600 to-neutral-500'
			}
		>
			<Image
				src={`${props.event.thumbnail}`}
				width={300}
				height={200}
				alt={`${props.event.description}`}
				className={'object-cover w-32 h-24 rounded-md'}
			/>
			<div
				className={
					'flex flex-col flex-nowrap gap-1 justify-start w-full'
				}
			>
				<h1 className={'text-3xl font-bold'}>{props.event.name}</h1>
				{props.event.name.length < 30 ? (
					<h3>{props.event.description}</h3>
				) : null}
			</div>
		</div>
	);
}

export default async function AvaliableEvents() {
	const events = avaliableEvents;

	return (
		<div className="flex flex-col flex-nowrap gap-3 w-full max-w-[600px] px-4">
			{events.map((event) => (
				<AvaliableEventCard key={event.id} event={event} />
			))}
		</div>
	);
}
