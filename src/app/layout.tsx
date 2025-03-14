import type { Metadata } from "next";
import { workSans, roboto } from "@/styles/fonts";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Knights of Columbus - Council 12392",
  description: "Knight of Columbus Council 12392 - St. Joan of Arc Church - Faith, Family, Community & Life",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${roboto.variable}`}>
      <body className={`min-h-screen bg-background font-sans`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
