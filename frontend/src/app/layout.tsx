import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invite Me",
  description: "Inviting App",
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
          "flex flex-col flex-nowrap min-h-screen h-fit items-center justify-start text-neutral-800",
          "lg:flex-row lg:flex-wrap lg:justify-center lg:items-start lg:gap-6 lg:p-4",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme={"dark"}
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  );
}
