import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeOptions } from "./utils/theme";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CheckOut from "./pages/Checkout";
import { Routes, Route } from "react-router-dom";
import { UserDetailsWrapper } from "./context/userContext";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";

function App() {
	return (
		<ThemeProvider theme={themeOptions}>
			<CssBaseline>
				<UserDetailsWrapper>
					<ErrorBoundary fallback={<Error />}>
						<Routes>
							<Route path="*" element="Not Found" />
							<Route path="/" element={<Login />} />
							<Route path="/home" element={<Home />} />
							<Route path="/products" element={<Products />} />
							<Route path="/checkout" element={<CheckOut />} />
						</Routes>
					</ErrorBoundary>
				</UserDetailsWrapper>
			</CssBaseline>
		</ThemeProvider>
	);
}

export default App;
