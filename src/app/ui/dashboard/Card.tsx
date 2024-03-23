import { Event } from '@prisma/client';
import Image from 'next/image';
import { ComponentProps } from 'react';
import Avatar from '../util/Avatar';
import { getMissingTime } from '@/app/functions/util/TimeHandler';
import { tv } from 'tailwind-variants';

export type DivProps = ComponentProps<'div'>;

const CardTypeVariants = tv({
	base: 'relative rounded-lg overflow-hidden bg-slate-900',
	variants: {
		type: {
			hero_event: 'w-full shadow-md max-w-[600px]',
			large: 'w-72 shadow-md',
			medium: 'w-1/2 shadow-md max-w-[294px]',
			small: 'w-24 shadow-sm',
		},
	},
	defaultVariants: {
		type: 'medium',
	},
});

export default function Card(
	props: DivProps & {
		event: Event;
		type?: 'hero_event' | 'large' | 'medium' | 'small';
		color?: string;
		className?: string;
		showtimeleft?: 'true' | 'false';
	}
) {
	const { event, type, color, showtimeleft, className } = props;
	type ? type : 'medium';
	event.thumbnail ? event.thumbnail : 'https://i.imgur.com/8Km9tLL.png';

	return (
		<div className={CardTypeVariants({ type })} {...props}>
			<Image
				src={`${event.thumbnail}`}
				width={600}
				height={400}
				alt={`${event.description}`}
				className={'object-cover w-full h-full'}
			/>
			<div className="w-max h-max bg-gradient-to-b from-neutral-500 via-transparent to-black"></div>
			<div
				className={
					'absolute bottom-[0px] left-0 px-4 bg-black bg-opacity-50'
				}
			>
				<h2 className={'text-white text-lg font-semibold'}>
					{`${event.name}${
						showtimeleft
							? ' - ' + getMissingTime(event.startDate)
							: ''
					}`}
				</h2>
			</div>
			<div className="absolute bottom-0 right-0 px-4">
				{type == 'hero_event' ? (
					<Avatar image={'https://i.imgur.com/8Km9tLL.png'} />
				) : null}
			</div>
		</div>
	);
}
