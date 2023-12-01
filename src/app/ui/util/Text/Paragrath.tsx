import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Paragrath({
	children,
	color,
}: {
	children: React.ReactNode;
	type?: 'primary' | 'secondary' | 'blue';
} & ComponentProps<'p'>) {
	return (
		<p
			className={twMerge(
				'',
				color == 'primary' || color == undefined
					? 'text-neutral-800'
					: '',
				color == 'secondary' ? 'text-neutral-300' : '',
				color == 'blue' ? 'text-blue-500' : ''
			)}
		>
			{children}
		</p>
	);
}
