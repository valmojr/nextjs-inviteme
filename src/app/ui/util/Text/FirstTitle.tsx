import { twMerge } from 'tailwind-merge';

export default function FirstTitle({
	children,
	color,
}: {
	children?: React.ReactNode;
	color?: 'primary' | 'secondary' | 'blue';
}) {
	return (
		<h1
			className={twMerge(
				'',
				color == 'primary' || color == undefined
					? 'text-neutral-800'
					: '',
				color == 'secondary' ? 'text-neutral-300' : '',
				color == 'blue' ? 'text-blue-500' : ''
			)}
		>
			{children}
		</h1>
	);
}
