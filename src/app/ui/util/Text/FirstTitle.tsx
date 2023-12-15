import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function FirstTitle(
	props: {
		strengh?: 'strong' | 'normal' | 'weak';
		children?: React.ReactNode;
	} & ComponentProps<'h1'>
) {
	const { children, strengh } = props;

	return (
		<h1
			{...props}
			className={twMerge(
				'text-3xl',
				strengh == 'strong' ? 'font-extrabold' : '',
				strengh == 'normal' || !strengh ? 'font-normal' : '',
				strengh == 'weak' ? 'font-extralight' : '',
				props.className
			)}
		>
			{children}
		</h1>
	);
}
