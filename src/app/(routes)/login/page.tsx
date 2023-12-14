'use client';
import SubmitButton from '@/app/ui/util/Buttons/SubmitButtom';
import Input from '@/app/ui/util/Forms/Input';
import Label from '@/app/ui/util/Forms/Label';
import Paragrath from '@/app/ui/util/Text/Paragrath';
import { useState } from 'react';
import DiscordLogo from './../../../../public/image/discord-mark-white.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { config } from 'dotenv';

export default function Page() {
	const [storedUsername, setStoredUsername] = useState<string>('');
	const [storedPassword, setStoredPassword] = useState<string>('');

	const [loginStatus, setLoginStatus] = useState<
		'primary' | 'success' | 'danger'
	>('primary');

	const { push } = useRouter();

	async function HandleSubmit() {
		push('dashboard');
	}

	config();

	return (
		<>
			<Paragrath>{'Insert your login info'}</Paragrath>
			<fieldset className="Fieldset">
				<Label htmlFor="name">Username</Label>
				<Input
					id="username"
					placeholder={'username'}
					onChange={(event) => setStoredUsername(event.target.value)}
				/>
			</fieldset>
			<fieldset className="Fieldset">
				<Label htmlFor="username">Password</Label>
				<Input
					id="password"
					placeholder={'********'}
					type={'password'}
					onChange={(event) => setStoredPassword(event.target.value)}
				/>
			</fieldset>
			<div className={'flex flex-row flex-nowrap gap-2'}>
				<SubmitButton
					color={loginStatus}
					onClick={() => HandleSubmit()}
				>
					LOGIN
				</SubmitButton>
				<a href={process.env.NEXT_PUBLIC_DISCORD_OAUTH2_URL}>
					<SubmitButton>
						<Paragrath
							color={'secondary'}
							className={
								'py-1 flex flex-row flex-nowrap items-center justify-center gap-2'
							}
						>
							<Image
								src={DiscordLogo}
								width={25}
								height={25}
								alt={''}
							/>
							DISCORD
						</Paragrath>
					</SubmitButton>
				</a>
			</div>
		</>
	);
}
