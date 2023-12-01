import TabContent from '@/app/ui/util/tabs/TabContent';
import TabList from '@/app/ui/util/tabs/TabList';
import TabListItem from '@/app/ui/util/tabs/TabListItem';
import TabRoot from '@/app/ui/util/tabs/TabRoot';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<TabRoot>
			<TabList>
				<TabListItem route={'/login'} />
				<TabListItem route={'/login/register'} />
				<TabListItem route={'/login/forgot'} />
			</TabList>
			<TabContent>{children}</TabContent>
		</TabRoot>
	);
}
