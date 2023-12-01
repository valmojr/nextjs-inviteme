'use client';
import Paragrath from '@/app/ui/util/Text/Paragrath';
import ThirdTitle from '@/app/ui/util/Text/ThirdTitle';
import { useState } from 'react';

export default function Page() {
	const [registerUsername, setRegisterUsername] = useState<string>();
	const [registerPassword, setRegisterPassword] = useState<string>();
	const [confirmPassword, setConfirmPassword] = useState<string>();

	return (
		<>
			<Paragrath>Create your Account</Paragrath>
		</>
	);
}
