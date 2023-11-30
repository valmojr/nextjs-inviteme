import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function TabContent(
	props: {
		children: React.ReactNode;
		className?: string;
	} & ComponentProps<'div'>
) {
	return (
		<div
			className={twMerge(
				'flex-grow p-20 bg-white rounded-b-6px outline-none focus:shadow-outline-black',
				props.className
			)}
		>
			{props.children}
		</div>
	);
}
