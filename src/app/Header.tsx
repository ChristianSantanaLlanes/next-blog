"use client";

import Link from "next/link";
import { BLOG_NAME } from "src/lib/constants";

export default function Header() {
  return (
    <header>
      <h1>
        <Link href="/">{BLOG_NAME}</Link>
      </h1>
    </header>
  );
}
