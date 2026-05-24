import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";
import IntroLoader from "@/components/IntroLoader";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishek Verma | Full Stack & Mobile App Developer",
  description:
    "Personal portfolio of Abhishek Verma — Full Stack Developer & Mobile App Engineer specializing in React, Next.js, React Native, and Flutter. Building fast, scalable digital products.",
  keywords: [
    "Abhishek Verma",
    "Full Stack Developer",
    "Mobile App Developer",
    "React Native Developer",
    "Flutter Developer",
    "Technical Architect",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Abhishek Verma" }],
  creator: "Abhishek Verma",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abhishek Verma | Full Stack & Mobile App Developer",
    description:
      "Building fast, scalable, and visually refined applications across mobile and web. React, Next.js, React Native, Flutter.",
    siteName: "Abhishek Verma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Verma | Full Stack & Mobile App Developer",
    description:
      "Building fast, scalable, and visually refined applications across mobile and web.",
    creator: "@abhishekvverma",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${jetbrainsMono.variable} font-body bg-background text-on-surface antialiased selection:bg-primary-container selection:text-white transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <IntroLoader />
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
