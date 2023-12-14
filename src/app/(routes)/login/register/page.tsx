'use client';
import SubmitButton from '@/app/ui/util/Buttons/SubmitButtom';
import Input from '@/app/ui/util/Forms/Input';
import Label from '@/app/ui/util/Forms/Label';
import Paragrath from '@/app/ui/util/Text/Paragrath';
import { useState } from 'react';
import Image from 'next/image';
import DiscordLogo from './../../../../../public/image/discord-mark-white.svg';

export default function Page() {
	const [registerUsername, setRegisterUsername] = useState<string>();
	const [registerPassword, setRegisterPassword] = useState<string>();
	const [confirmPassword, setConfirmPassword] = useState<string>();

	return (
		<>
			<fieldset>
				<Label>Username</Label>
				<Input></Input>
			</fieldset>
			<fieldset>
				<Label>Password</Label>
				<Input id="password" type="password"></Input>
			</fieldset>
			<fieldset>
				<Label>Confirm Password</Label>
				<Input id="confirmPassword" type="password"></Input>
			</fieldset>
			<div className={'flex flex-row flex-nowrap gap-2'}>
				<SubmitButton color={'primary'}>REGISTER</SubmitButton>
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
