import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';
import { cn } from '@/lib/utils';

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
				className={cn(
					'flex flex-col flex-nowrap min-h-screen h-fit items-center justify-start text-neutral-800',
					'lg:flex-row lg:flex-wrap lg:justify-center lg:items-start lg:gap-6 lg:p-4',
					inter.className
				)}
			>
				{children}
			</body>
		</html>
	);
}
