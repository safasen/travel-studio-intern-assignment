
import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "./dashboard/queryProvider";

export const metadata: Metadata = {
  title: "Travel Studio Intern Assignment",
  description: "A simple travel requests dashboard",
}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
