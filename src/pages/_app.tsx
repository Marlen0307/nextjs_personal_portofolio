import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import Main from "../components/layouts/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import "../styles.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Main>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>

        <DarkModeSwitch />
      </Main>
    </ChakraProvider>
  );
}

export default MyApp;
