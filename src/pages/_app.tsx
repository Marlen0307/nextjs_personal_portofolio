import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import Main from "../components/layouts/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import '../styles.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Main>
        <Component {...pageProps} />
        <DarkModeSwitch />
      </Main>
    </ChakraProvider>
  );
}

export default MyApp;
