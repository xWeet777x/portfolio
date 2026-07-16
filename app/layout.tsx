import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.josemardossantos.com"),
  title: "Web Designer e UI/UX no Rio de Janeiro | Josemar dos Santos",
  description: "Web designer, UI/UX designer e desenvolvedor front-end no Rio de Janeiro. Criação de sites responsivos, interfaces e identidades visuais.",
  alternates: { canonical: "/" },
  authors: [{ name: "Josemar dos Santos", url: "/" }],
  creator: "Josemar dos Santos",
  publisher: "Josemar dos Santos",
  category: "Design e desenvolvimento web",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Web Designer e UI/UX no Rio de Janeiro | Josemar dos Santos",
    description: "Sites responsivos, interfaces digitais e identidades visuais criadas no Rio de Janeiro.",
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Josemar dos Santos — Portfólio",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Josemar dos Santos — UI/UX Designer e Front-End Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Designer e UI/UX no Rio de Janeiro | Josemar dos Santos",
    description: "Sites responsivos, interfaces digitais e identidades visuais criadas no Rio de Janeiro.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
