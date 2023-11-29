import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Invite Me',
	description: 'Inviting App',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Theme
					appearance="dark"
					accentColor="blue"
					grayColor="sage"
					className={
						'flex flex-row flex-wrap h-screen w-screen items-center justify-center bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-400'
					}
				>
					{children}
				</Theme>
			</body>
		</html>
	);
}
