import { AppProps } from "next/app";
import "../styles/global.scss";
import Link from "next/link";
import { Header } from "../components/Header";
import { SessionProvider } from "next-auth/react";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../services/prismicio";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider linkResolver={linkResolver}>
      <PrismicPreview repositoryName={repositoryName}>
        {console.log(linkResolver)}
        <SessionProvider session={pageProps.session}>
          <Header />
          <Component {...pageProps} />
        </SessionProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
