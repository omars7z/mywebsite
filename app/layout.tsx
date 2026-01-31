import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Software & AI Engineer | Portfolio",
  description: "Building agentic workflows and deep learning solutions. CS student at JUST, open-source contributor, and software engineer.",
  keywords: ["Software Engineer", "AI Engineer", "Machine Learning", "Deep Learning", "Next.js", "Portfolio"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Software & AI Engineer | Portfolio",
    description: "Building agentic workflows and deep learning solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

