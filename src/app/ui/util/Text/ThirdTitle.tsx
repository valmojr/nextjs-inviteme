import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function ThirdTitle(
	props: {
		strengh?: 'strong' | 'normal' | 'weak';
		children?: React.ReactNode;
	} & ComponentProps<'h3'>
) {
	const { children, strengh } = props;

	return (
		<h3
			{...props}
			className={twMerge(
				'text-md',
				strengh == 'strong' ? 'font-bold' : '',
				strengh == 'normal' || !strengh ? 'font-normal' : '',
				strengh == 'weak' ? 'font-thin' : '',
				props.className
			)}
		>
			{children}
		</h3>
	);
}
