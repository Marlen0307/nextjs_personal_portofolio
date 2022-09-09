import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { ReactElement } from "react";

interface LandingPageSectionType {
  index: number;
  title: string;
  description: string;
  sideElement?: ReactElement;
  image?: string;
}

export default function LandingPageSection({
  index,
  title,
  description,
  sideElement,
  image,
}: LandingPageSectionType) {
  const isOdd = (num: number) => num % 2 === 1;
  console.log(isOdd(index));
  
  return (
    <Box
      display={{ lg: "flex" }}
      justifyContent={{ lg: "center" }}
      alignItems={{ lg: "center" }}
      flexDirection={isOdd(index) ? ["row-reverse"] : undefined}
    >
      <Box
        width={{ base: "80%", lg: "35%" }}
        mx={{ base: "auto", lg: "0" }}
        paddingRight={{ ...(isOdd(index) && { lg: "10" }) }}
        paddingLeft={{ ...(isOdd(index) && { lg: "10" }) }}
      >
        {sideElement && <>{sideElement}</>}
        {image && (
          <Image
            src={image}
            width="500"
            height="500"
            alt={title}
            placeholder="blur"
            blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
          />
        )}
      </Box>

      <Box w={{ lg: "50%" }}>
        <Heading as="h1">{title}</Heading>
        <Text py="4">{description}</Text>
      </Box>
    </Box>
  );
}
