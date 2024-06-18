import React from "react";
import "./globals.css";

export const metadata = {
  title: "Adrian's Portfolio",
  description: "A quick little snapshot of who I am and what I'm doing.",
}

export default function RootLayout({children}) {
  return(
    <html lang="en">
      <body className={'${inter.className}'}>
        {children}
      </body>
    </html>
  );
}