// import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react"
import { AuthProvider } from "./Firebase/context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MyApp = ({ Component, pageProps }) => {
  return(
    
        <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
  ) 
};

export default MyApp;
