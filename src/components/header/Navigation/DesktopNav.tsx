import { Flex, Show } from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo";

export default function DesktopNav() {
  return (
    <Show above="lg">
      <Logo />
    </Show>
  );
}
