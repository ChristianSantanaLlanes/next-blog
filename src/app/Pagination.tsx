"use client";

import { Box, HStack, Link, Text } from "@chakra-ui/react";
import { PER_PAGE } from "src/lib/constants";

type Props = {
  totalCount: number;
  currentPageID: number;
};

export const Pagination = ({ totalCount, currentPageID }: Props) => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const pageCount = Math.ceil(totalCount / PER_PAGE);

  const getPaginationItem = (p: number) => {
    if (p === currentPageID)
      return (
        <Text color="gray.700" fontSize="3xl">
          {p}
        </Text>
      );
    return (
      <Link href={`/page/${p}`} color="teal.500" fontSize="3xl">
        {p}
      </Link>
    );
  };

  return (
    <HStack spacing="10" justifyContent="center">
      {range(1, pageCount).map((number, index) => (
        <Box key={index}>{getPaginationItem(number)}</Box>
      ))}
    </HStack>
  );
};
