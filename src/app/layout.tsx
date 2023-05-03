import type { Metadata } from "next";
import { BLOG_NAME } from "src/lib/constants";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: BLOG_NAME,
  description: "",
};
