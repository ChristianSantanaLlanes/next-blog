import Head from "next/head";
import type { ReactNode } from "react";
import { BLOG_NAME } from "src/lib/constants";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <>
      <Head>
        <title>{BLOG_NAME}</title>
      </Head>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
