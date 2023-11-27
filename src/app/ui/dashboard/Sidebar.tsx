import { User } from '@prisma/client';
import Image from 'next/image';

export default function Sidebar({ loggedUser }: { loggedUser: User }) {
	return (
		<div className="absolute h-16 w-screen top-0 bg-neutral-900 text-white flex flex-row flex-nowrap justify-center items-center gap-4 shadow-neutral-500 shadow-lg">
			<Image
				src={`${loggedUser.avatar}`}
				width={40}
				height={40}
				alt={`${loggedUser.name}'s Picture`}
				className={'rounded-full'}
			/>
			<h1 className={'text-2xl'}>{`${loggedUser.name.toUpperCase()}`}</h1>
		</div>
	);
}
