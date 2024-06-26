import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { cx } from "cvax"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cx(
          `${geistSans.variable} ${geistMono.variable}`,
          "dark:bg-[#060606] dark:text-neutral-400 font-light font-mono",
          "bg-gradient-to-r dark:from-neutral-900 dark:from-10% dark:via-neutral-950 via-30% dark:to-neutral-900 to-90%"
        )}
      >
        {children}
      </body>
    </html>
  )
}
