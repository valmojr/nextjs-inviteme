import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function MainContainer(
	props: ComponentProps<'div'> & {
		color?: 'primary' | 'secondary';
	}
) {
	const { color } = props;

	return (
		<div
			className={twMerge(
				'flex flex-col flex-nowrap items-center justify-between gap-2',
				color === 'primary' ? 'bg-neutral-700' : '',
				color === 'secondary' ? 'bg-neutral-100' : '',
				color === undefined ? '' : '',
				props.className
			)}
			{...props}
		>
			{props.children}
		</div>
	);
}
