import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Hide,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { Children } from "react";
import { pages, SitePages } from "../../../config/pages";
import NavigationItem from "../../utils/Navigation/NavigationItem";
import Logo from "../Logo";

export default function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Hide above="lg">
      <IconButton
        aria-label="Mobile Menu"
        icon={<HamburgerIcon />}
        variant="outline"
        onClick={onOpen}
        ref={btnRef}
      />
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Logo />
            <IconButton
              border={0}
              aria-label="Close Mobile Navigation Bar"
              onClick={onClose}
              icon={<CloseIcon />}
              variant={"outline"}
            />
          </DrawerHeader>
          <DrawerBody>
            <Flex direction={"column"}>
              {Children.toArray(
                pages.map((page: SitePages) => (
                  <NavigationItem href={page.slug} label={page.name} />
                ))
              )}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Hide>
  );
}
