import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default async function ContentContainer(
	props: { orientation?: 'row' | 'col' } & ComponentProps<'div'>
) {
	const { className, orientation } = props;

	return (
		<div
			{...props}
			className={twMerge(
				'flex flex-wrap bg-neutral-200 items-center justify-center gap-3 drop-shadow-md px-3 py-2 rounded-md',
				orientation == 'row' ? 'flex-row' : 'flex-col',
				className
			)}
		></div>
	);
}
