import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Col(
	props: { children: React.ReactNode } & ComponentProps<'div'>
) {
	return (
		<div
			{...props}
			className={twMerge(
				'flex flex-col flex-nowrap items-center justify-center',
				props.className
			)}
		>
			{props.children}
		</div>
	);
}
