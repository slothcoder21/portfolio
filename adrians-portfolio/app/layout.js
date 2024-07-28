import React from "react";
import "./globals.css";
import  {IBM_Plex_Mono } from 'next/font/google';
import {DM_Sans} from 'next/font/google';

const ibm = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm',
  weight: '500',
})

const DMSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-DMSans'
})

export const metadata = {
  title: "Adrian's Portfolio",
  description: "A quick little snapshot of who I am and what I'm doing.",
}

export default function RootLayout({children}) {
  return(
    <html lang="en" className="${ibm.className}${DMSans.className} font-sans">
      <body className={'${inter.className} bg-[#FFFAE7]'}>
        {children}
      </body>
    </html>
  );
}