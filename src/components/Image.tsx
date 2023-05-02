import React from "react";

type Props = {
  src: string;
  alt: string;
  title: string;
  height: number;
  width: number;
};

export default function PostImage({
  src,
  alt,
  title,
  height = 100,
  width = 100,
}: Props) {
  return (
    <img src={src} alt={alt} title={title} height={height} width={width} />
  );
}
