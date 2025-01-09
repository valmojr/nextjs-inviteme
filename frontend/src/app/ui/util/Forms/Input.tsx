import { ComponentProps } from 'react';

export default function Input(
	props: { children?: React.ReactNode } & ComponentProps<'input'>
) {
	return (
		<input
			className={
				'flex-auto rounded-md py-2 px-4 text-base color-violet-700 shadow-lg active:border-1 text-neutral-700 border-solid border-1 border-neutral-100 focus:border-blue-600'
			}
			{...props}
		>
			{props.children}
		</input>
	);
}
