import Verify from '@/app/functions/authentication/Verify';
import LogoutButtom from '@/app/ui/dashboard/profile/LogoutButtom';
import Avatar from '@/app/ui/util/Avatar';
import FirstTitle from '@/app/ui/util/Text/FirstTitle';
import { User } from '@prisma/client';
import { cookies } from 'next/headers';

export default function Page() {
	const token = cookies().get('token')?.value;
	const profile = Verify(token as string) as User;

	return (
		<>
			<Avatar profile={profile} size={'extralarge'} border={'circle'} />
			<FirstTitle>{profile.displayName}</FirstTitle>
			<LogoutButtom />
		</>
	);
}
