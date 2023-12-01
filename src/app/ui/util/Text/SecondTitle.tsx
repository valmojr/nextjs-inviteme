import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function SecondTitle({
	children,
	color,
}: {
	children: React.ReactNode;
	color?: 'primary' | 'secondary' | 'blue';
} & ComponentProps<'p'>) {
	return (
		<h2
			className={twMerge(
				'text-2xl',
				color == 'primary' || color == undefined
					? 'text-neutral-800'
					: '',
				color == 'secondary' ? 'text-neutral-100' : '',
				color == 'blue' ? 'text-blue-500' : ''
			)}
		>
			{children}
		</h2>
	);
}
