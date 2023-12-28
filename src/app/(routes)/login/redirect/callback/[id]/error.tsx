'use client';
import FirstTitle from '@/app/ui/util/Text/FirstTitle';
import ThirdTitle from '@/app/ui/util/Text/ThirdTitle';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<>
			<FirstTitle>Error</FirstTitle>
			<ThirdTitle>{error.message.toUpperCase()}</ThirdTitle>
		</>
	);
}
