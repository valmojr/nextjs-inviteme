import Image from 'next/image';
import { ComponentProps, Suspense } from 'react';

export function FallbackAvatar() {
	return <h1>Loading...</h1>;
}

export default function Avatar(
	props: {
		image: string;
		border?: 'circle' | 'rounded' | 'square';
		size?: 'small' | 'medium' | 'large';
		alt?: string;
	} & ComponentProps<'img'>
) {
	const { image, border, size, alt } = props;

	return (
		<Image
			src={image}
			width={300}
			height={300}
			alt={alt ? alt : ''}
			className="w-16 h-16 my-2 rounded-full select-none"
		/>
	);
}
