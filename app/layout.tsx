import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

// app/layout.js
export const metadata = {
  title: 'Amir Ekh – Software Engineer',
  description: 'Portfolio of Amir Ekhi, showcasing projects, skills, and contact information.',
  icons: {
    icon: '/netnumeral.jpg',
    shortcut: '/icons/favicon-32x32.png',
    apple: '/icons/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Amir Ekh – Software Engineer',
    description: 'Explore Amir Ekhi’s projects, skills, and professional journey.',
    url: 'https://port-eight-swart.vercel.app.com',
    siteName: 'Amir Ekh Portfolio',
    images: [
      {
        url: 'https://port-eight-swart.vercel.app.com/headshot.jpg', // full URL
        width: 1200,
        height: 630,
        alt: 'Preview image for Amir Ekh Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amir Ekh – Software Engineer',
    description: 'Explore Amir Ekh’s projects, skills, and professional journey.',
    images: ['https://port-eight-swart.vercel.app.com/headshot.jpg'],
  },
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light:bg-[#ebe4da] bg-[#000319] "  suppressHydrationWarning>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        
        {/* <Sidebar/> */}
         <ThemeProvider>
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
//