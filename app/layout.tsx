import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";

import LoveIcon from '@mui/icons-material/FavoriteRounded';

import Link from "next/link";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Pag-ibig 100",
  description: "The Love and Life of Rizal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faviconSvg = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fb7185">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  `);
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href={`data:image/svg+xml,${faviconSvg}`}
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-5 items-center font-semibold">
                    <Link href={"/"} className="text-xl text-rose-400 lg:text-xl"><LoveIcon />&nbsp; Pag-ibig 100</Link>
                    {/* <div className="flex items-center gap-2">
                      <DeployButton />
                    </div> */}
                  </div>
                  {/* {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />} */}
                </div>
              </nav>
              <div className="w-full flex flex-col">
                {children}
              </div>

              <footer className="w-full flex flex-col items-center justify-center border-t mx-auto text-center text-xs gap-4 py-16">
                <a
                  href="/about"
                  rel="noreferrer"
                >
                  <button
                    className="w-fit ml-auto text-xs text-white bg-rose-400 dark:bg-rose-500 px-4 py-2 mt-4 rounded-full opacity-50 hover:opacity-100"
                  >
                    About This Website
                  </button>
                </a>
                <div className="w-full flex items-center justify-center mx-auto text-center text-xs gap-2">
                  <p>
                    This website is created by{" "}
                    <a
                      href="https://github.com/mariware"
                      target="_blank"
                      className="font-bold hover:underline"
                      rel="noreferrer"
                    >
                      mariware
                    </a>
                    .
                  </p>
                  <ThemeSwitcher />
                </div>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
