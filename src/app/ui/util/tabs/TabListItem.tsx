'use client';
import { useRouter, usePathname } from 'next/navigation';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function TabListItem(
	props: {
		route: string;
		className?: string;
		defaultRoute?: boolean;
	} & ComponentProps<'div'>
) {
	const router = useRouter();

	const localRoute = usePathname();

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
				'flex-1 h-45px flex items-center justify-center px-20 bg-white font-size-15 line-height-1 text-mauve-11 select-none text-black',
				props.className
			)}
			onClick={() => router.push(props.route)}
		>
			{extractSegments(props.route)?.toUpperCase()}
		</div>
	);
}
