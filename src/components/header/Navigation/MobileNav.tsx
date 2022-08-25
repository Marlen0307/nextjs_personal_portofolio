import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Hide,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo";

export default function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Hide above="lg">
      <IconButton
        aria-label="Mobile Menu"
        icon={<HamburgerIcon />}
        variant="outline"
        onClick={onOpen}
      />
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Logo />
          </DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Hide>
  );
}
