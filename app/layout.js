import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Background from "@/components/ui/Background";
import { SessionProvider } from "next-auth/react";
import "easymde/dist/easymde.min.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "workforce",
  description: "A modern Blogging website for techies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            {" "}
            <Background>
              <Navbar />
              {children}
            </Background>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
