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
				'text-3xl',
				color == 'primary' || color == undefined
					? 'text-neutral-800'
					: '',
				color == 'secondary' ? 'text-neutral-100' : '',
				color == 'blue' ? 'text-blue-500' : ''
			)}
		>
			{children}
		</h1>
	);
}
