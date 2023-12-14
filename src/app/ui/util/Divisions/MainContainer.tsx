import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default async function ScreenContainer(
	props: {} & ComponentProps<'div'>
) {
	const { className } = props;

	return (
		<div
			{...props}
			className={twMerge(
				'flex flex-col flex-nowrap bg-white items-center justify-center gap-3 px-3 py-2 rounded-md',
				className
			)}
		></div>
	);
}
