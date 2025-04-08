import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Header from '@/components/Header';
import Background from '@/components/Background';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Script from 'next/script';
import localFont from 'next/font/local';

const goldenSignature = localFont({
  src: '/fonts/GoldenSignature.otf',
  weight: '400',
  style: 'normal',
  variable: '--font-golden-signature',
  display: 'swap'
});

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Burhan Sağlık | Personal',
  metadataBase: new URL('http://burhansaglik.site/'),
  alternates: {
    canonical: '/'
  },
  authors: [{ name: 'Burhan Sağlık', url: ':https://github.com/BurhanSglk' }],
  description:
    "Explore Burhan Sağlık's personal portfolio showcasing creative web development projects, modern UI/UX designs, and dynamic applications built with React, TypeScript, and Tailwind CSS. Let's collaborate!",
  openGraph: {
    title: 'Burhan Sağlık | Personal',
    description:
      "Explore Burhan Sağlık's personal portfolio showcasing creative web development projects, modern UI/UX designs, and dynamic applications built with React, TypeScript, and Tailwind CSS. Let's collaborate!",
    images: [
      {
        url: '/burhan.jpg',
        alt: "Burhan Sağlık's Portrait",
        width: 640,
        height: 800
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Burhan Sağlık | Personal',
    description:
      "Explore Burhan Sağlık's personal portfolio showcasing creative web development projects, modern UI/UX designs, and dynamic applications built with React, TypeScript, and Tailwind CSS. Let's collaborate!",
    images: ['/burhan.jpg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Burhan Sağlık',
    jobTitle: 'Web Developer & Photographer',
    url: 'http://burhansaglik.site/',
    sameAs: ['https://github.com/BurhanSglk','https://www.instagram.com/burhan.sglk', 'https://www.linkedin.com/in/burhan-sağlık/']
  };
  return (
    <html lang="en">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-11GN8Y8ER7" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-11GN8Y8ER7');
          `}
      </Script>
      <Script
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7285329314913241"
      ></Script>
      <body className={`${montserrat.className} ${goldenSignature.variable}`}>
        <Header />
        <Background />
        <main className="container lg:px-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
