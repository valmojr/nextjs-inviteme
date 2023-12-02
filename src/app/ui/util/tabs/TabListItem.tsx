'use client';
import { useRouter, usePathname } from 'next/navigation';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import ThirdTitle from '../Text/ThirdTitle';

export default function TabListItem(
	props: {
		route: string;
		className?: string;
		defaultRoute?: boolean;
	} & ComponentProps<'div'>
) {
	const router = useRouter();
	const localRoute = usePathname();
	const isSelected = !!(localRoute == props.route);

	const extractSegments = (urlPath: string): string | null => {
		const segments: string[] = urlPath.split('/').filter(Boolean);

		if (segments.length > 0) {
			return segments[segments.length - 1];
		} else {
			return null;
		}
	};

	return (
		<div
			className={twMerge(
				'flex-1 first:rounded-tl-xl last:rounded-tr-xl h-[45px] flex items-center justify-center bg-white font-size-15 line-height-1 text-mauve-11 select-none text-black  shadow-md shadow-neutral-400 hover:shadow-2xl hover:shadow-neutral-800',
				isSelected ? 'bg-blue-600' : 'hover:bg-blue-300',
				props.className
			)}
			onClick={() => router.push(props.route)}
		>
			<ThirdTitle color={isSelected ? 'secondary' : 'primary'}>
				{extractSegments(props.route)?.toUpperCase()}
			</ThirdTitle>
		</div>
	);
}
