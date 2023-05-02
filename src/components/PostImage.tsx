import Image from "next/image";
import React from "react";
import style from "./image.module.css";

type Props = {
  src: string;
  alt: string;
};

export default function PostImage({ src, alt }: Props) {
  return <Image className={style.image} src={src} alt={alt} fill />;
}
