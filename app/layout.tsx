import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GinRats - Your Drinking Habits, Socially Tracked",
  description:
    "Join the community that's changing how we track drinking habits. Whether you're celebrating sobriety milestones or sharing your night out adventures, GinRats makes it social, fun, and accountable.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
