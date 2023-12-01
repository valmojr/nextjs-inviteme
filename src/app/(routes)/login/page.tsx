'use client';

import SubmitButton from '@/app/ui/util/Buttons/SubmitButtom';
import { useRouter } from 'next/navigation';

export default function Page() {
	const router = useRouter();

	return <h1 className="text-black">Login Page</h1>;
}
