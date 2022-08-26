import { Box, Flex, Show } from "@chakra-ui/react";
import Link from "next/link";
import React, { Children } from "react";
import { pages, SitePages } from "../../../config/pages";
import NavigationItem from "../../utils/Navigation/NavigationItem";
import Logo from "../Logo";

export default function DesktopNav() {
  return (
    <Show above="lg">
      <Box>
        <Logo />
      </Box>
      <Box
        alignItems={"center"}
        flexGrow={0.5}
        display={"flex"}
        justifyContent={"center"}
      >
        {Children.toArray(
          pages.map((page: SitePages) => (
            <NavigationItem href={page.slug} label={page.name} />
          ))
        )}
      </Box>
      {/* empty div to push contetnt more on the left */}
      <Box
        flexGrow={0.1}
        display={"flex"}
        justifyContent={"space-between"}
      ></Box>
    </Show>
  );
}
