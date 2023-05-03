"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PostImage from "./PostImage";
import type { Post } from "src/types/post";
import {
  Box,
  Container,
  Divider,
  Heading,
  Stack,
  Text,
  UnorderedList,
  OrderedList,
  Checkbox,
  ListItem,
  Code,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Link,
} from "@chakra-ui/react";
import { DateTime } from "src/app/DateTime";

type Props = {
  post: Post;
};

export default function PostPage({ post }: Props) {
  const markdownComponents = {
    h1: (props: any) => {
      const { children } = props;
      return (
        <Heading my={4} as="h1" size="2xl">
          {children}
        </Heading>
      );
    },
    h2: (props: any) => {
      const { children } = props;
      return (
        <Heading my={4} as="h2" size="xl">
          {children}
        </Heading>
      );
    },
    h3: (props: any) => {
      const { children } = props;
      return (
        <Heading my={4} as="h3" size="lg">
          {children}
        </Heading>
      );
    },
    h4: (props: any) => {
      const { children } = props;
      return (
        <Heading my={4} as="h4" size="md">
          {children}
        </Heading>
      );
    },
    h5: (props: any) => {
      const { children } = props;
      return (
        <Heading my={4} as="h5" size="sm">
          {children}
        </Heading>
      );
    },
    h6: (props: any) => {
      const { children } = props;
      return (
        <Heading my={4} as="h6" size="xs">
          {children}
        </Heading>
      );
    },
    p: (props: any) => {
      const { children } = props;
      return (
        <Text mb={3} lineHeight={1.6} fontSize="lg">
          {children}
        </Text>
      );
    },
    text: (props: any) => {
      const { children } = props;
      return (
        <Text as="span" lineHeight={1.6} fontSize="lg">
          {children}
        </Text>
      );
    },
    ul: (props: any) => {
      const { ordered, children, depth } = props;
      let Element = UnorderedList;
      let styleType = "disc";
      if (ordered) {
        Element = OrderedList;
        styleType = "decimal";
      }
      if (depth === 1) styleType = "circle";
      return (
        <Element
          spacing={2}
          as={ordered ? "ol" : "ul"}
          styleType={styleType}
          pl={4}
        >
          {children}
        </Element>
      );
    },
    ol: (props: any) => {
      const { ordered, children, depth } = props;
      let Element = UnorderedList;
      let styleType = "disc";
      if (ordered) {
        Element = OrderedList;
        styleType = "decimal";
      }
      if (depth === 1) styleType = "circle";
      return (
        <Element
          spacing={2}
          as={ordered ? "ol" : "ul"}
          styleType={styleType}
          pl={4}
        >
          {children}
        </Element>
      );
    },
    li: (props: any) => {
      const { children, checked } = props;
      let checkbox = null;
      if (checked !== null && checked !== undefined) {
        checkbox = (
          <Checkbox isChecked={checked} isReadOnly>
            {children}
          </Checkbox>
        );
      }
      return (
        <ListItem listStyleType={checked !== null ? "none" : "inherit"}>
          {checkbox || children}
        </ListItem>
      );
    },
    blockquote: (props: any) => {
      const { children } = props;
      return (
        <Code as="blockquote" p={2}>
          {children}
        </Code>
      );
    },
    code: (props: any) => {
      const { inline, children, className } = props;

      if (inline) {
        return <Code p={2} children={children} />;
      }

      return (
        <Code
          className={className}
          whiteSpace="break-spaces"
          display="block"
          w="full"
          p={2}
          children={children}
        />
      );
    },
    table: (props: any) => <Table>{props.children}</Table>,
    thead: (props: any) => <Thead>{props.children}</Thead>,
    tbody: (props: any) => <Tbody>{props.children}</Tbody>,
    tr: (props: any) => <Tr>{props.children}</Tr>,
    td: (props: any) => <Td>{props.children}</Td>,
    th: (props: any) => <Th>{props.children}</Th>,
    a: (props: any) => (
      <Link color="teal.500" href={props.href}>
        {props.children}
      </Link>
    ),
    em: (props: any) => {
      const { children } = props;
      return (
        <Text as="em" lineHeight={1.6} fontSize="lg">
          {children}
        </Text>
      );
    },
    hr: (props: any) => {
      return <Divider marginY="4" />;
    },
    img: (image: any) => {
      return (
        <PostImage
          src={
            require(`src/contents/posts/${post.year}/${post.month}/${post.slug}/${image.src}`)
              .default.src
          }
          alt={image.alt}
        />
      );
    },
  };

  return (
    <>
      <Box>
        <Container
          as="main"
          maxW="container.md"
          marginTop="4"
          marginBottom="16"
        >
          <Stack spacing="8">
            <Heading as="h1" fontSize="4xl" lineHeight={1.6}>
              {post.title}
            </Heading>
            <DateTime datetime={post.date} />
          </Stack>
          <Divider marginY="8" />
          <ReactMarkdown
            components={markdownComponents}
            remarkPlugins={[remarkGfm]}
          >
            {post.content}
          </ReactMarkdown>
        </Container>
      </Box>
    </>
  );
}
