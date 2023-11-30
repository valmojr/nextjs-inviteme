import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function SubmitButton(
	props: {
		type?: 'primary' | 'secondary' | 'success' | 'error';
	} & ComponentProps<'button'>
) {
	const { type } = props;

	return (
		<button
			className={twMerge(
				'Button green inline-flex items-center justify-center rounded-4px px-15 font-size-15 line-height-1 font-weight-500 h-35px bg-green-4 text-green-11 hover:bg-green-5 focus:shadow-outline-green-7',
				props.className
			)}
		>
			{props.children}
		</button>
	);
}
