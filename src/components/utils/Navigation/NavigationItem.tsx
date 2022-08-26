import { Box, Text, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
type NavItemProps = {
  href: string;
  label: string;
};
import navStyles from "./navigationStyles.module.css";
export default function NavigationItem({ href, label }: NavItemProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box mx={5} my={{ base: 5, md: 0 }} fontSize={"lg"}>
      <Link href={href}>
        <Text
          className={navStyles.navItem}
          sx={{
            _after: {
              backgroundColor: isDark ? "#fff" : "#000",
            },
          }}
          fontWeight={600}
          letterSpacing={1.5}
        >
          {label}
        </Text>
      </Link>
    </Box>
  );
}
