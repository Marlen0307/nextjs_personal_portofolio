import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Layout from "../components/layouts/article";
import heroImg from "../public/bighead.svg";

const Index = () => {
  const color = useColorModeValue("telegram.500", "telegram.400");

  return (
    <>
      <Box display={"flex"} justifyContent={"center"}>
        <Image src={heroImg} width="350" height="350" />
      </Box>
      <Layout>
        <Heading
          pt={2}
          display={"block"}
          size={"xl"}
          width={"100%"}
          textAlign={"center"}
        >
          Hi, I'm Marlen{" "}
          <span role="img" aria-label="hand">
            👋🏻
          </span>
        </Heading>
        <Heading
          display={"block"}
          size={"2xl"}
          py={4}
          width={"100%"}
          textAlign={"center"}
          fontWeight="700"
        >
          Building
          <Text color={color} as={"span"}>
            {" "}
            Quality
          </Text>{" "}
          Software
        </Heading>
        <Text fontSize={"xl"} textAlign={"center"}>
          A{" "}
          <Text as="span" fontWeight="600">
            software developer
          </Text>{" "}
          based in Albania, I specialize on building scalable and maintainable
          web and mobile applications.
        </Text>
      </Layout>
    </>
  );
};

export default Index;
