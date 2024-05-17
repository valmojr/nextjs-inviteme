import DiscordUser from '@/app/functions/types/DiscordUser';
import DiscordAvatarParser from '@/app/functions/util/DiscordAvatarParser';
import { User } from '@prisma/client';
import { PersonStandingIcon } from 'lucide-react';
import Image from 'next/image';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
export function FallbackAvatar() {
	return <h1>Loading...</h1>;
}

export default function Avatar(
	props: {
		image?: string;
		profile?: Partial<User>;
		border?: 'circle' | 'rounded' | 'square';
		size?: 'small' | 'medium' | 'large' | 'extralarge';
		alt?: string;
	} & ComponentProps<'img'>
) {
	let { image, profile, border, size, alt } = props;

	if (profile && !profile?.avatar) {
		profile.avatar = '';
	}

	// if profile.avatar doesn't starts with https://cdn.discordapp.com, add it
	if (
		profile &&
		profile.avatar &&
		typeof profile.avatar == 'string' &&
		!profile.avatar.startsWith('https://cdn.discordapp.com')
	) {
		profile.avatar = DiscordAvatarParser(profile.discordId || '', profile.avatar);
	}

	if (image) {
		return (
			<Image
				src={image}
				width={300}
				height={300}
				alt={alt ? alt : ''}
				placeholder={'empty'}
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
					size === 'large' ? 'w-20 h-20' : null,
					size === 'extralarge' ? 'w-40 h-40' : null
				)}
			/>
		);
	} else if (profile && profile.discordId && typeof profile.avatar == 'string') {
		return (
			<Image
				src={profile.avatar}
				width={300}
				height={300}
				alt={alt ? alt : ''}
				placeholder={'empty'}
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
					size === 'large' ? 'w-20 h-20' : null,
					size === 'extralarge' ? 'w-40 h-40' : null
				)}
			/>
		);
	} else if (profile && !profile.discordId) {
		return (
			<PersonStandingIcon
				width={300}
				height={300}
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
					size === 'large' ? 'w-20 h-20' : null,
					size === 'extralarge' ? 'w-40 h-40' : null
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
				placeholder={'blur'}
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
					size === 'large' ? 'w-20 h-20' : null,
					size === 'extralarge' ? 'w-40 h-40' : null
				)}
			/>
		);
	}
}
