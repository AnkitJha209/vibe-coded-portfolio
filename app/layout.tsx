import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ankit Jha — Backend Engineer",
    description:
        "Backend engineer who builds scalable systems integrated with AI. Explore my work through an interactive terminal.",
    openGraph: {
        title: "Ankit Jha — Terminal Portfolio",
        images: ["/og-image.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
            <body className="min-h-full bg-[#0d0d0d] text-[#e2e2e2] font-mono">
                {children}
            </body>
        </html>
    );
}
