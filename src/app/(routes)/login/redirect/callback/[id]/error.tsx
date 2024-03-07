'use client';
import FirstTitle from '@/app/ui/util/Text/FirstTitle';
import SecondTitle from '@/app/ui/util/Text/SecondTitle';
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
			{error?.digest && (<SecondTitle>{error.digest}</SecondTitle>)}
			<ThirdTitle className="text-center">
				{error?.message}
			</ThirdTitle>
		</>
	);
}
