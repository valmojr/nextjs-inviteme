import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Paragrath({
	children,
	type,
}: {
	children: React.ReactNode;
	type?: 'primary' | 'secondary';
} & ComponentProps<'p'>) {
	return (
		<p
			className={twMerge(
				'mt-0 mb-5 text-base block',
				type == 'primary' || type == undefined
					? 'text-neutral-800'
					: '',
				type == 'secondary' ? 'text-neutral-200' : ''
			)}
		>
			{children}
		</p>
	);
}
