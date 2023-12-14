'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import GetUser from './GetUser';

export default function GetCode() {
	const url = useSearchParams();
	const code = new URLSearchParams(url).get('code') || '';

	return (
		<>
			<GetUser code={code} />
		</>
	);
}
