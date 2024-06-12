import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function MainContainer(
	props: {} & ComponentProps<'div'>
) {
	const { className } = props;

	return (
		<div
			{...props}
			className={twMerge(
				'flex flex-col flex-nowrap items-center justify-center gap-3 px-3 py-2 rounded-md bg-white',
				'lg:h-[635px]',
				className
			)}
		></div>
	);
}
