import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { ReactElement } from 'react';
import { MainPageSection } from '../../../../config/mainPageSections';

interface LandingPageSectionType {
  index: number;
  pageSection: MainPageSection;
}

export default function LandingPageSection({ index, pageSection }: LandingPageSectionType) {
  const { illustrationSide, description, title, image, customSection } = pageSection;
  if (customSection) {
    //* custom section will be a custom design, that is why it is returned here
    return <>{customSection}</>;
  }
  const isOdd = (num: number) => num % 2 === 1;
  return (
    <Box
      display={{ lg: 'flex' }}
      justifyContent={{ lg: 'center' }}
      alignItems={{ lg: 'center' }}
      flexDirection={isOdd(index) ? ['row-reverse'] : undefined}
      gap={5}
      my={5}
    >
      <Box
        width={{ base: '100%', sm: '80%', lg: '40%' }}
        mx={{ base: 'auto', lg: '0' }}
        my={{ base: 5, lg: 0 }}
        paddingRight={{ ...(isOdd(index) && { lg: '10' }) }}
        paddingLeft={{ ...(isOdd(index) && { lg: '10' }) }}
      >
        {illustrationSide && <>{illustrationSide}</>}
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

      <Box w={{ lg: '50%' }}>
        <Heading as="h1">{title}</Heading>
        <Text py="4">{description}</Text>
      </Box>
    </Box>
  );
}
