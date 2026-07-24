import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pizzeria Ristorante Le Palme | Levanto",
  description:
    "Pizzeria ristorante nel cuore di Levanto: pizza al forno a legna, cucina ligure, tavoli all'aperto e prenotazioni telefoniche.",
  openGraph: {
    title: "Pizzeria Ristorante Le Palme | Levanto",
    description:
      "Pizza, cucina ligure e atmosfera mediterranea in Corso Italia, a Levanto.",
    locale: "it_IT",
    siteName: "Pizzeria Ristorante Le Palme",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
