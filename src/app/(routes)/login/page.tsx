'use client';
import { validateLogin } from '@/app/functions/ValidateLogin';
import SubmitButton from '@/app/ui/util/Buttons/SubmitButtom';
import Input from '@/app/ui/util/Forms/Input';
import Label from '@/app/ui/util/Forms/Label';
import Paragrath from '@/app/ui/util/Text/Paragrath';
import { useState } from 'react';
import DiscordLogo from './../../../../public/image/discord-mark-white.svg';
import Image from 'next/image';

export default function Page() {
	const [storedUsername, setStoredUsername] = useState<string>('');
	const [storedPassword, setStoredPassword] = useState<string>('');

	const [loginStatus, setLoginStatus] = useState<
		'primary' | 'success' | 'danger'
	>('primary');

	async function handleSubmit() {
		const loginData = {
			username: storedUsername,
			password: storedPassword,
		};

		await validateLogin(loginData);
	}

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
					onChange={(event) => setStoredPassword(event.target.value)}
				/>
			</fieldset>
			<div className={'flex flex-row flex-nowrap gap-2'}>
				<SubmitButton
					color={loginStatus}
					onClick={() => handleSubmit()}
				>
					LOGIN
				</SubmitButton>
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
						Discord
					</Paragrath>
				</SubmitButton>
			</div>
		</>
	);
}
