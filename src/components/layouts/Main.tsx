import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../Footer";
import Header from "../header";

export default function Main({ children }) {
  return (
    <>
      <Header />

      <Container maxWidth={"container.lg"} pt={14}>
        {children}
      </Container>
      <Footer />
    </>
  );
}
