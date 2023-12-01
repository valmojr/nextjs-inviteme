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
					'flex flex-row flex-wrap h-screen w-screen items-center justify-center bg-gradient-to-tl from-cyan-900 to-indigo-500 text-neutral-800',
					inter.className
				)}
			>
				{children}
			</body>
		</html>
	);
}
