import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

export default function ContentContainer(
	props: { orientation?: 'row' | 'col' } & ComponentProps<'div'>
) {
	const { className, children } = props;

	return (
		<Card
			className={cn(
				'flex flex-wrap flex-col items-center justify-center gap-2',
				'lg:w-[680px] lg:h-[750px]',
				className
			)}
		>
			{children}
		</Card>
	);
}
