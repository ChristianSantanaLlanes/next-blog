import Head from "next/head";
import type { ReactNode } from "react";
import { BLOG_NAME } from "src/lib/constants";
import Header from "src/components/Header";

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
      <footer>
        <small>{`© 2023 ${BLOG_NAME}`}</small>
      </footer>
    </>
  );
}
