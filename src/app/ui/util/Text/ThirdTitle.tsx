import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function ThirdTitle(
	props: {
		children: React.ReactNode;
		color?: 'primary' | 'secondary' | 'blue';
	} & ComponentProps<'p'>
) {
	const { children, color } = props;

	return (
		<h3
			className={twMerge(
				'text-lg font-semibold',
				color == 'primary' || color == undefined
					? 'text-neutral-800'
					: '',
				color == 'secondary' ? 'text-neutral-100' : '',
				color == 'blue' ? 'text-blue-500' : ''
			)}
			{...props}
		>
			{children}
		</h3>
	);
}
