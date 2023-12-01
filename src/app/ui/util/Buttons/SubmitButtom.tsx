import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function SubmitButton(
	props: {
		color?: 'primary' | 'secondary' | 'success' | 'danger';
	} & ComponentProps<'button'>
) {
	const { color } = props;

	return (
		<button
			className={twMerge(
				'inline-flex items-center justify-center rounded-md px-4 py-2 font-size-15 line-height-1 font-weight-500 h-35 bg-green-4 text-green-11 hover:bg-green-5 focus:shadow-outline-green-7 cursor-pointer shadow-sm shadow-neutral-400',
				color == 'primary' || color == undefined
					? 'bg-blue-500 text-neutral-100'
					: null,
				color == 'secondary' ? 'bg-neutral-200 text-neutral-800' : '',
				color == 'success' ? 'bg-emerald-600' : '',
				color == 'danger' ? 'bg-red-500' : '',
				props.className
			)}
			{...props}
		>
			{props.children}
		</button>
	);
}
