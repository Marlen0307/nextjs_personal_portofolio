import React from 'react';
import Link from 'next/link';
import { chakra } from '@chakra-ui/react';

export default function Logo() {
  return (
    <Link href="/" passHref>
      <chakra.a fontSize="2rem" fontWeight="700">
        LOGO
      </chakra.a>
    </Link>
  );
}
