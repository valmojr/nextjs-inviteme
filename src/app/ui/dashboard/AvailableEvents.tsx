import { availableEvents } from '@/app/functions/mock/mock_data';
import { Event } from '@prisma/client';
import Image from 'next/image';
import { ComponentProps } from 'react';

export function AvailableEventCard(
	props: { event: Event } & ComponentProps<'div'>
) {
	return (
		<div
			className={
				'flex flex-row flex-nowrap rounded-lg overflow-hidden w-full shadow-md max-w-[600px] bg-neutral-100'
			}
		>
			<Image
				src={`${props.event.thumbnail}`}
				width={300}
				height={200}
				alt={`${props.event.description}`}
				className={'object-cover w-32 h-24 rounded-l-md'}
			/>
			<div
				className={
					'flex flex-col flex-nowrap gap-2 justify-center mx-4'
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

export default async function AvailableEvents() {
	const events = availableEvents;

	return (
		<h1>TODO - Available Events</h1>
	);
}
