import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import NavBar from "./Navigation";

export default function Header() {
  return (
    <Box as="header" boxShadow={"md"} px={2}>
        <NavBar />
    </Box>
  );
}
