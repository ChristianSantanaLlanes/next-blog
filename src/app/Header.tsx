"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import { BLOG_NAME } from "src/lib/constants";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorSwitchButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const tooltipLabel =
    colorMode === "light"
      ? "ダークモードへ切り替えます"
      : "ライトモードへ切り替えます";
  return (
    <Tooltip label={tooltipLabel}>
      <IconButton
        aria-label="swith color mode"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </Tooltip>
  );
};

export default function Header() {
  return (
    <Box px={4}>
      <Container maxW="container.lg">
        <Flex
          as="header"
          py="4"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/" passHref>
            <Heading as="h1" fontSize="2xl" cursor="pointer">
              {BLOG_NAME}
            </Heading>
          </Link>
          <ColorSwitchButton />
        </Flex>
      </Container>
    </Box>
  );
}
