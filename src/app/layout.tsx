import type { Metadata } from "next";
import { BLOG_NAME } from "src/lib/constants";
import App from "./App";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <App>{children}</App>;
}

export const metadata: Metadata = {
  title: BLOG_NAME,
  description: "",
};
