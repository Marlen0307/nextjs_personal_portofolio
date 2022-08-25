import { Flex, FlexProps } from "@chakra-ui/react";

export const Footer = (props: FlexProps) => (
  <Flex as="footer" py="3rem" {...props} justifyContent={"center"} alignItems={'center'} marginTop={'auto'}>
    &copy; {new Date().getFullYear()} Marlen Hima. All Rights Reserved.
  </Flex>
);
