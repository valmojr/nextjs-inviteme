import SubmitButton from '@/app/ui/util/Buttons/SubmitButtom';
import MainContainer from '@/app/ui/util/Containers/MainContainer';

export default function PlaygroundPage() {
	return (
		<MainContainer>
			<h1>Playground Page to test and style reusable components</h1>
			<SubmitButton color={'primary'}>Button 1</SubmitButton>
			<SubmitButton color={'secondary'}>Button 2</SubmitButton>
			<SubmitButton color={'success'}>Button 3</SubmitButton>
			<SubmitButton color={'danger'}>Button 4</SubmitButton>
		</MainContainer>
	);
}
