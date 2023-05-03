"use client";

import { Box, Container, Heading, Button, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { DateTime } from "./DateTime";
import type { Post } from "src/types/post";

type Props = {
  allPosts: Post[];
};

export default function PostsPage({ allPosts }: Props) {
  return (
    <>
      <Box px={4}>
        <Container as="main" maxW="container.lg" marginTop="8" marginBottom="8">
          {allPosts.map((post) => (
            <Box key={post.slug}>
              <Link
                href={`contents/posts/${post.year}/${post.month}/${post.slug}`}
              >
                <Heading
                  as="h2"
                  fontSize="2xl"
                  lineHeight={2}
                  marginTop="1"
                  flex={1}
                  cursor="pointer"
                >
                  {post.title}
                </Heading>
              </Link>
              <DateTime datetime={post.date} />
              <Link
                href={`contents/posts/${post.year}/${post.month}/${post.slug}`}
              >
                <Button colorScheme="teal" variant="outline" size="sm" mt="8">
                  続きを読む
                </Button>
              </Link>
              <Stack
                mt="10"
                mb="10"
                borderBottom="1px"
                borderColor="gray.300"
              />
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
}
