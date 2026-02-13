import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { oxanium } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: {
    default: `${siteConfig.name} – Web Developer, Designer, and Freelancer`,
    template: `%s – Web Developer, Designer, and Freelancer`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  author: siteConfig.author,
  robots: siteConfig.robots,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="RONiB" />
        <GoogleAnalytics />
      </head>
      <body
        className={`${oxanium.className} flex min-h-screen flex-col justify-between`}
      >
        <Toaster />
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="mx-auto flex w-11/12 max-w-[1275px] flex-grow flex-col justify-center p-4 py-12 lg:w-10/12 lg:py-20 lg:pt-10">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
