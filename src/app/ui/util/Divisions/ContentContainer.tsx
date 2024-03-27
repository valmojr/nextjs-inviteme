import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

export default function ContentContainer(
	props: { orientation?: 'row' | 'col' } & ComponentProps<'div'>
) {
	const { className, orientation } = props;

	return (
		<div
			{...props}
			className={cn(
				'flex flex-wrap items-center justify-center gap-3',
				'drop-shadow-md bg-neutral-200 px-3 py-2 rounded-md',
				'lg:w-[680px] h-[730px]',
				orientation == 'row' ? 'flex-row' : 'flex-col',
				className
			)}
		></div>
	);
}
