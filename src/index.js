// Filename - index.js

import {
	ChakraProvider,
	ColorModeScript,
} from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"
ReactDOM.render(
	<BrowserRouter>
		<ChakraProvider>
			<ColorModeScript initialColorMode="dark"></ColorModeScript>
			<App />
		</ChakraProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
