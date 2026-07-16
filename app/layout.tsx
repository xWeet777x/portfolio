import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.josemardossantos.com"),
  title: "Josemar dos Santos — UI/UX Designer & Front-End Developer",
  description: "Portfólio de Josemar dos Santos, designer UI/UX e desenvolvedor front-end no Rio de Janeiro.",
  openGraph: {
    title: "Josemar dos Santos — UI/UX Designer & Front-End Developer",
    description: "Design com intenção. Código com precisão.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Josemar dos Santos — UI/UX Designer e Front-End Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Josemar dos Santos — UI/UX Designer & Front-End Developer",
    description: "Design com intenção. Código com precisão.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
