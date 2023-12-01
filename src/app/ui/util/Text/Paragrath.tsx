import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Paragrath(
	props: {
		children: React.ReactNode;
		type?: 'primary' | 'secondary' | 'blue';
	} & ComponentProps<'p'>
) {
	const { children, color } = props;

	return (
		<p
			className={twMerge(
				'',
				color == 'primary' || color == undefined
					? 'text-neutral-800'
					: '',
				color == 'secondary' ? 'text-neutral-100' : '',
				color == 'blue' ? 'text-blue-500' : ''
			)}
			{...props}
		>
			{children}
		</p>
	);
}
