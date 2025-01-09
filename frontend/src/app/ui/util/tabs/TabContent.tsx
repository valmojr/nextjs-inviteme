import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function TabContent(
	props: {
		children: React.ReactNode;
		size?: string;
		className?: string;
	} & ComponentProps<'div'>
) {
	return (
		<div
			className={twMerge(
				'flex flex-col flex-nowrap h-96 p-20 bg-white rounded-b-xl outline-none focus:shadow-outline-black justify-center items-center gap-6',
				props.className
			)}
		>
			{props.children}
		</div>
	);
}
