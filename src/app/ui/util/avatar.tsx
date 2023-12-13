import { User } from '@prisma/client';
import Image from 'next/image';
import { ComponentProps, Suspense } from 'react';
import { twMerge } from 'tailwind-merge';

export function FallbackAvatar() {
	return <h1>Loading...</h1>;
}

export default function Avatar(
	props: {
		image?: string;
		profile?: User;
		border?: 'circle' | 'rounded' | 'square';
		size?: 'small' | 'medium' | 'large';
		alt?: string;
	} & ComponentProps<'img'>
) {
	let { image, profile, border, size, alt } = props;

	if (profile && !profile?.avatar) {
		profile.avatar = '';
	}

	if (image) {
		return (
			<Image
				src={image}
				width={300}
				height={300}
				alt={alt ? alt : ''}
				className={twMerge(
					'my-2 select-none shadow-md hover:shadow-xl',
					border === 'circle' ? 'rounded-full' : null,
					border === 'rounded' || border === undefined
						? 'rounded-xl'
						: null,
					border === 'square' ? 'rounded-none' : null,
					size === 'small' ? 'w-8 h-8' : null,
					size === 'medium' || size === undefined
						? 'w-16 h-16'
						: null,
					size === 'large' ? 'w-20 h-20' : null
				)}
			/>
		);
	} else if (profile && typeof profile.avatar == 'string') {
		return (
			<Image
				src={profile.avatar}
				width={300}
				height={300}
				alt={alt ? alt : ''}
				className={twMerge(
					'my-2 select-none shadow-md hover:shadow-xl',
					border === 'circle' ? 'rounded-full' : null,
					border === 'rounded' || border === undefined
						? 'rounded-xl'
						: null,
					border === 'square' ? 'rounded-none' : null,
					size === 'small' ? 'w-8 h-8' : null,
					size === 'medium' || size === undefined
						? 'w-16 h-16'
						: null,
					size === 'large' ? 'w-20 h-20' : null
				)}
			/>
		);
	} else {
		return (
			<Image
				src={''}
				width={300}
				height={300}
				alt={alt ? alt : ''}
				className={twMerge(
					'my-2 select-none shadow-md hover:shadow-xl',
					border === 'circle' ? 'rounded-full' : null,
					border === 'rounded' || border === undefined
						? 'rounded-xl'
						: null,
					border === 'square' ? 'rounded-none' : null,
					size === 'small' ? 'w-8 h-8' : null,
					size === 'medium' || size === undefined
						? 'w-16 h-16'
						: null,
					size === 'large' ? 'w-20 h-20' : null
				)}
			/>
		);
	}
}
