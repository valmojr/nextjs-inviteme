import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type BadgeColor =
	| 'gray'
	| 'red'
	| 'yellow'
	| 'green'
	| 'blue'
	| 'indigo'
	| 'purple'
	| 'pink';

export default function Badge(
	props: { color?: BadgeColor } & ComponentProps<'span'>
) {
	const { color, children, className } = props;

	return (
		<span
			{...props}
			className={twMerge(
				'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
				color === 'gray'
					? 'bg-gray-50 text-gray-600 ring-gray-500/10'
					: '',
				color === 'red' ? 'bg-red-50 text-red-700 ring-red-600/10' : '',
				color === 'yellow'
					? 'bg-yellow-50 text-yellow-800 ring-yellow-600/20'
					: '',
				color === 'green'
					? 'bg-green-50 text-green-700 ring-green-600/20'
					: '',
				color === 'blue' || !color
					? 'bg-blue-50 text-blue-700 ring-blue-700/10'
					: '',
				color === 'indigo'
					? 'bg-indigo-50 text-indigo-700 ring-indigo-700/10'
					: '',
				color === 'purple'
					? 'bg-purple-50 text-purple-700 ring-purple-700/10'
					: '',
				color === 'pink'
					? 'bg-pink-50 text-pink-700 ring-pink-700/10'
					: '',
				className
			)}
		>
			{children}
		</span>
	);
}
