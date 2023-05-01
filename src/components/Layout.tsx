import Head from "next/head";
import Link from "next/link";
import type { ReactNode } from "react";
import { BLOG_NAME } from "src/lib/constants";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <>
      <Head>
        <title>{BLOG_NAME}</title>
      </Head>
      <header>
        <h1>
          <Link href="/">{BLOG_NAME}</Link>
        </h1>
      </header>
      {props.children}
      <footer>
        <small>{`© 2023 ${BLOG_NAME}`}</small>
      </footer>
    </>
  );
}
