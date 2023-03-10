import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/icons/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="keywords"
          content="Hackathon, Hackathon matching, Hackathon events, Find hackathon, Community, Find peers, Find team"
        />
      </Head>
      <body className="overflow-x-hidden bg-[#FAF9F9] text-black transition-colors duration-200 dark:bg-slate-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
