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
  //todo: add styling to nav itms
  return (
    <Box
      mx={5}
      fontSize={"lg"}
      className={navStyles.navItem}
      sx={{
        _after: {
          backgroundColor: isDark ? "#fff" : "#000",
        },
      }}
    >
      <Link href={href}>
        <Text fontWeight={600} letterSpacing={1.5}>
          {label}
        </Text>
      </Link>
    </Box>
  );
}
