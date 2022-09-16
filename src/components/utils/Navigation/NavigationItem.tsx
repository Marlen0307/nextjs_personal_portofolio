import { Box, Text, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
type NavItemProps = {
  href: string;
  label: string;
  onClickCallback?: () => void;
};
import navStyles from "./navigationStyles.module.css";
export default function NavigationItem({
  href,
  label,
  onClickCallback,
}: NavItemProps) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box mx={5} my={{ base: 5, md: 0 }} fontSize={"lg"}>
      <Link href={href} passHref>
        <Text
          onClick={onClickCallback}
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
