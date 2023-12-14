import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';

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
			<body
				className={twMerge(
					'flex flex-col flex-nowrap min-h-screen h-fit items-center justify-center text-neutral-800',
					inter.className
				)}
			>
				{children}
			</body>
		</html>
	);
}
