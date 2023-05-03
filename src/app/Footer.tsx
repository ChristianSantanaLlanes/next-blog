"use client";

import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { BLOG_NAME } from "src/lib/constants";

export default function Footer() {
  return (
    <Box px={4}>
      <Container maxW="container.lg">
        <Flex as="footer" py="4" justifyContent="center">
          <Text fontSize="md">{`© 2023 ${BLOG_NAME}`}</Text>
        </Flex>
      </Container>
    </Box>
  );
}
