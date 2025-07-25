import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/app/components/ui/toaster";

export const metadata: Metadata = {
  title: "NN Sparkling Solutions",
  description: "NN Sparkling Solutions offer professional cleaning services to residential and commercial customers.",
  openGraph: {
    title: "NN Sparkling Solutions",
    description: "Professional cleaning services for homes and businesses.",
    url: "https://nn-sparkling-solutions.ca.vercel.app",
    siteName: "NN Sparkling Solutions",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "NN Sparkling Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.1.0/typed.umd.js"
          integrity="sha512-+2pW8xXU/rNr7VS+H62aqapfRpqFwnSQh9ap6THjsm41AxgA0MhFRtfrABS+Lx2KHJn82UOrnBKhjZOXpom2LQ=="
          crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      </body>
    </html>
  );
}
