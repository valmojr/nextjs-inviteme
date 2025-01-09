import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Paragrath(
	props: {
		strengh?: 'strong' | 'normal' | 'weak';
		children?: React.ReactNode;
	} & ComponentProps<'p'>
) {
	const { children, strengh } = props;

	return (
		<p
			{...props}
			className={twMerge(
				'text-sm',
				strengh == 'strong' ? 'font-bold' : '',
				strengh == 'normal' || !strengh ? 'font-normal' : '',
				strengh == 'weak' ? 'font-light' : '',
				props.className
			)}
		>
			{children}
		</p>
	);
}
