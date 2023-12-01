import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Label(
	props: { children?: React.ReactNode } & ComponentProps<'label'>
) {
	return (
		<label
			className={twMerge('text-base mb-2 text-blue-900 block')}
			{...props}
		>
			{props.children}
		</label>
	);
}
