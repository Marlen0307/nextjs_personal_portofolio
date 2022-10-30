import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../Footer";
import Header from "../header";

export default function Main({ children }: { children: React.ReactElement[] }) {
  return (
    <>
      <Header />

      <Container maxWidth={"container.xl"} pt={14}>
        {children}
      </Container>
      <Footer />
    </>
  );
}
