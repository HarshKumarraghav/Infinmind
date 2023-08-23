import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import type { Metadata } from "next";
import AuthContextProvider from "@/Providers/AuthProvider";
import ThemeProviders from "@/Providers/ThemeProvider";
import NextTopLoader from "nextjs-toploader";
import { ModalProvider } from "@/Providers/ModalProvider";
export const metadata: Metadata = {
  title: "InfiniMind.ai",
  description: "InfiniMind.ai is a platform for creating and sharing ideas.",
  icons: {
    icon: "/logo/logo.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <NextTopLoader
          color="#2563eb"
          initialPosition={0.08}
          crawlSpeed={200}
          height={5}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <ThemeProviders>
          <ModalProvider />
          <AuthContextProvider>
            <main>{children}</main>
            <Toaster />
          </AuthContextProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
