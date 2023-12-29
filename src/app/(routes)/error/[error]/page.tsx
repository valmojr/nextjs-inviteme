import ContentContainer from '@/app/ui/util/Divisions/ContentContainer';
import FirstTitle from '@/app/ui/util/Text/FirstTitle';
import Paragrath from '@/app/ui/util/Text/Paragrath';

export default async function page({ params }: { params: { error: string } }) {
	const parsedError: { status: number; message: string } = JSON.parse(
		params.error
	);

	if (parsedError) {
		return (
			<ContentContainer>
				<FirstTitle>{`Error`}</FirstTitle>
				<ContentContainer>
					<Paragrath>{parsedError.message}</Paragrath>
				</ContentContainer>
			</ContentContainer>
		);
	}

	return (
		<ContentContainer>
			<FirstTitle>{`Unhandled Status`}</FirstTitle>
		</ContentContainer>
	);
}
