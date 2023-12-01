import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function TabRoot({
	children,
	className,
}: { children: React.ReactNode; className?: string } & ComponentProps<'div'>) {
	return (
		<div
			className={twMerge(
				'flex flex-col w-1/2 min-w-[320px] max-w-[400px] shadow-md',
				className
			)}
		>
			{children}
		</div>
	);
}
