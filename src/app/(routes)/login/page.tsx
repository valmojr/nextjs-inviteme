import Tab from '@/app/ui/util/tabs/Tab';

export default function Page() {
	return (
		<>
			<Tab.TabRoot>
				<Tab.TabList>
					<Tab.TabListItem contentRef="login">Login</Tab.TabListItem>
					<Tab.TabListItem contentRef="register">
						Register
					</Tab.TabListItem>
					<Tab.TabListItem contentRef="forgot">
						Forgot Password
					</Tab.TabListItem>
				</Tab.TabList>
				<Tab.TabContent>
					<Tab.TabContentItem contentRef="login">
						<h1>Login</h1>
					</Tab.TabContentItem>
					<Tab.TabContentItem contentRef="register">
						<h1>Register</h1>
					</Tab.TabContentItem>
					<Tab.TabContentItem contentRef="forgot">
						<h1>Forgot Password</h1>
					</Tab.TabContentItem>
				</Tab.TabContent>
			</Tab.TabRoot>
		</>
	);
}
