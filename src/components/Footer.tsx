import { BLOG_NAME } from "src/lib/constants";

export default function Footer() {
  return (
    <footer>
      <small>{`© 2023 ${BLOG_NAME}`}</small>
    </footer>
  );
}
