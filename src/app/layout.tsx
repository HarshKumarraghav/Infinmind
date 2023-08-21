import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import type { Metadata } from "next";
import AuthContextProvider from "@/Providers/AuthProvider";
import ThemeProviders from "@/Providers/ThemeProvider";

export const metadata: Metadata = {
  title: "InfiniMind.ai",
  description: "InfiniMind.ai is a platform for creating and sharing ideas.",
  icons: {
    icon: "/Images/logo.png",
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
        <ThemeProviders>
          <AuthContextProvider>
            <main>{children}</main>
            <Toaster />
          </AuthContextProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
