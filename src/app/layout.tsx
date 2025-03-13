import "@/app/assets/styles/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "VeloMiko",
  description:
    "Welcome to VeloMiko, my personal space for all things cycling. Track my Strava rides, check out my favorite gear, and follow my journey on two wheels. Ride with me! 🚴‍♂️"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
