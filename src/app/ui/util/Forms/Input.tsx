import { ComponentProps } from 'react';

export default function Input({
	children,
}: { children?: React.ReactNode } & ComponentProps<'input'>) {
	return (
		<input
			className={
				'flex-auto rounded-md py-2 text-base color-violet-700 shadow-md'
			}
		>
			{children}
		</input>
	);
}
