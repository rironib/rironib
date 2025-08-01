import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { exo } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Providers } from "./providers";

export async function generateMetadata() {
  return {
    title: {
      default: `${siteConfig.name} – Web Developer, Designer, and Freelancer`,
      template: `%s – Web Developer, Designer, and Freelancer`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    author: siteConfig.author,
    robots: siteConfig.robots,
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="RONiB" />
        <GoogleAnalytics />
      </head>
      <body
        className={`${exo.className} flex min-h-screen flex-col justify-between`}
      >
        <Toaster />
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="max-w-[100dvw] flex-grow overflow-auto">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
