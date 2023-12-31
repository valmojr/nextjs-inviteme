import getAuthenticatedUser from '@/app/functions/authentication/JWT';
import { User } from '@prisma/client';
import { cookies } from 'next/headers';
import Avatar from '../util/Avatar';
import SecondTitle from '../util/Text/SecondTitle';
export default async function Sidebar() {
	const token = cookies().get('token')?.value as string;

	const loggedUser = (await getAuthenticatedUser(token)) as User;

	return (
		<div className="h-14 w-screen top-0 bg-neutral-900 text-white flex flex-row flex-nowrap justify-center items-center gap-4 shadow-neutral-500 shadow-lg">
			<SecondTitle>{`${loggedUser.displayName}`}</SecondTitle>
			<Avatar profile={loggedUser} size={'small'} border={'circle'} />
		</div>
	);
}
