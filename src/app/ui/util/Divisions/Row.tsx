import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Row(
	props: { children: React.ReactNode } & ComponentProps<'div'>
) {
	return (
		<div
			{...props}
			className={twMerge(
				'flex flex-row flex-nowrap items-center justify-center gap-3',
				props.className
			)}
		>
			{props.children}
		</div>
	);
}
