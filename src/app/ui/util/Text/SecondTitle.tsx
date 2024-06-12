import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function SecondTitle(
	props: {
		strengh?: 'strong' | 'normal' | 'weak';
		children?: React.ReactNode;
	} & ComponentProps<'h2'>
) {
	const { children, strengh } = props;

	return (
		<h2
			{...props}
			className={twMerge(
				'text-xl',
				strengh == 'strong' ? 'font-extrabold' : '',
				strengh == 'normal' || !strengh ? 'font-normal' : '',
				strengh == 'weak' ? 'font-light' : '',
				props.className
			)}
		>
			{children}
		</h2>
	);
}
