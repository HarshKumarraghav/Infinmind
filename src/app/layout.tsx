import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import type { Metadata } from "next";
import AuthContextProvider from "@/Providers/AuthProvider";
import ThemeProviders from "@/Providers/ThemeProvider";
import NextTopLoader from "nextjs-toploader";
import { ModalProvider } from "@/Providers/ModalProvider";
import { TopLoaderOptions } from "../../utils/constants";
export const metadata: Metadata = {
  title: "InfiniMind.ai",
  description: "InfiniMind.ai is a platform for creating and sharing ideas.",
  icons: { icon: "/logo/logo.png" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/logo.png" />
      </head>
      <body suppressHydrationWarning={true}>
        <NextTopLoader {...TopLoaderOptions} />
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
