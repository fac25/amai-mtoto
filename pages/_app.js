// pages/_app.js
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { AuthContextProvider } from "../context/AuthContext";
import { useRouter } from "next/router";
import Head from "next/head";
import { capitalizeFirstLetter } from "../lib/helper-functions";


const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const pathArr = router.pathname.replaceAll('/', '').split(/[\s-]/g)
  const capitalizedPath = pathArr.map(capitalizeFirstLetter).join(' ')

  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <Head>
          <title>{capitalizedPath ? capitalizedPath + '-' : ''} Amai Mtoto</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default MyApp