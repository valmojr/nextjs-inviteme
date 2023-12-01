import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function ThirdTitle({
	children,
	color,
}: {
	children: React.ReactNode;
	color?: 'primary' | 'secondary' | 'blue';
} & ComponentProps<'p'>) {
	return (
		<h3
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
		</h3>
	);
}