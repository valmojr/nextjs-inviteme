import Badge from '@/app/ui/util/Badge';
import SubmitButton from '@/app/ui/util/Buttons/SubmitButtom';
import MainContainer from '@/app/ui/util/Divisions/MainContainer';
import Avatar from '@/app/ui/util/Avatar';
import FirstTitle from '@/app/ui/util/Text/FirstTitle';
import SecondTitle from '@/app/ui/util/Text/SecondTitle';
import ThirdTitle from '@/app/ui/util/Text/ThirdTitle';
import Paragrath from '@/app/ui/util/Text/Paragrath';
import ScreenContainer from '@/app/ui/util/Divisions/ScreenContainer';
import ContentContainer from '@/app/ui/util/Divisions/ContentContainer';

export default function PlaygroundPage() {
	const avatarImage = 'https://i.imgur.com/8Km9tLL.png';
	return (
		<ScreenContainer>
			<FirstTitle className={'bg-neutral-300'}>
				Screen Container
			</FirstTitle>
			<MainContainer>
				<h1>Main Container</h1>
				<ContentContainer>
					<h1>Content Container</h1>
				</ContentContainer>
			</MainContainer>
			<MainContainer>
				<ThirdTitle>Submit Buttons</ThirdTitle>
				<ContentContainer>
					<SubmitButton color={'primary'}>Button 1</SubmitButton>
					<SubmitButton color={'secondary'}>Button 2</SubmitButton>
					<SubmitButton color={'success'}>Button 3</SubmitButton>
					<SubmitButton color={'danger'}>Button 4</SubmitButton>
				</ContentContainer>
			</MainContainer>
			<MainContainer className="flex flex-col flex-nowrap items-center justify-center">
				<h3>Avatars</h3>
				<ContentContainer>
					<div className="flex flex-row flex-nowrap gap-3">
						<Avatar
							image={avatarImage}
							border={'circle'}
							size={'large'}
						/>
						<Avatar
							image={avatarImage}
							border={'rounded'}
							size={'large'}
						/>
						<Avatar
							image={avatarImage}
							border={'square'}
							size={'large'}
						/>
					</div>
					<div className="flex flex-row flex-nowrap gap-3">
						<Avatar
							image={avatarImage}
							border={'circle'}
							size={'medium'}
						/>
						<Avatar
							image={avatarImage}
							border={'rounded'}
							size={'medium'}
						/>
						<Avatar
							image={avatarImage}
							border={'square'}
							size={'medium'}
						/>
					</div>
					<div className="flex flex-row flex-nowrap gap-3">
						<Avatar
							image={avatarImage}
							border={'circle'}
							size={'small'}
						/>
						<Avatar
							image={avatarImage}
							border={'rounded'}
							size={'small'}
						/>
						<Avatar
							image={avatarImage}
							border={'square'}
							size={'small'}
						/>
					</div>
				</ContentContainer>
			</MainContainer>
			<MainContainer>
				<h1>Texts</h1>
				<ContentContainer orientation={'row'}>
					<div className="flex flex-col flex-nowrap items-center justify-center">
						<FirstTitle strengh={'strong'}>
							Strong First Title
						</FirstTitle>
						<FirstTitle strengh={'normal'}>
							Normal First Title
						</FirstTitle>
						<FirstTitle strengh={'weak'}>
							Weak First Title
						</FirstTitle>
					</div>
					<div className="flex flex-col flex-nowrap items-center justify-center">
						<SecondTitle strengh={'strong'}>
							Strong Second Title
						</SecondTitle>
						<SecondTitle strengh={'normal'}>
							Normal Second Title
						</SecondTitle>
						<SecondTitle strengh={'weak'}>
							Weak Second Title
						</SecondTitle>
					</div>
					<div className="flex flex-col flex-nowrap items-center justify-center">
						<ThirdTitle strengh={'strong'}>
							Strong Third Title
						</ThirdTitle>
						<ThirdTitle strengh={'normal'}>
							Normal Third Title
						</ThirdTitle>
						<ThirdTitle strengh={'weak'}>
							Weak Third Title
						</ThirdTitle>
					</div>
					<div className="flex flex-col flex-nowrap items-center justify-center">
						<Paragrath strengh={'strong'}>
							Strong Paragrath
						</Paragrath>
						<Paragrath strengh={'normal'}>
							Normal Paragrath
						</Paragrath>
						<Paragrath strengh={'weak'}>Weak Paragrath</Paragrath>
					</div>
				</ContentContainer>
			</MainContainer>
			<MainContainer>
				<h1>Badge</h1>
				<ContentContainer orientation={'row'}>
					<Badge color={'gray'}>Gray</Badge>
					<Badge color={'red'}>Red</Badge>
					<Badge color={'yellow'}>Yellow</Badge>
					<Badge color={'green'}>Green</Badge>
					<Badge color={'blue'}>Blue</Badge>
					<Badge color={'indigo'}>Indigo</Badge>
					<Badge color={'purple'}>Purple</Badge>
					<Badge color={'pink'}>Pink</Badge>
				</ContentContainer>
			</MainContainer>
		</ScreenContainer>
	);
}
