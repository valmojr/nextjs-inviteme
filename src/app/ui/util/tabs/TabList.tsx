'use client';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function TabList(
	props: {
		children?: React.ReactNode;
		className?: string;
	} & ComponentProps<'div'>
) {
	const rootRoute = usePathname();

	return (
		<div
			className={twMerge(
				'flex-shrink-0 flex border-b-1 border-mauve-6',
				props.className
			)}
		>
			{props.children}
		</div>
	);
}
