import { Flex } from "@chakra-ui/react";
import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function NavBar() {
  return (
    <>
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        <DesktopNav />
        <MobileNav />
      </Flex>
    </>
  );
}
