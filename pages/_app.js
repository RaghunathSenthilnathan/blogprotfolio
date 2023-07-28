import "@styles/globals.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Blog Protfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
