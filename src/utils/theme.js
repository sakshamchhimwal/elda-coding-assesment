import { createTheme } from "@mui/material";

export const themeOptions = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "#eb7d7d",
		},
		secondary: {
			main: "#41505F",
		},
		background: {
			default: "#FAFAF5",
		},
		text: {
			primary: "#41505F",
			hint: "#989898",
			secondary: "#FA7878",
			disabled: "#087C7C",
		},
		divider: "rgba(255,255,255,0.8)",
		info: {
			main: "#007878",
		},
	},
	typography: {
		fontFamily: '"Inter"',
	},
	props: {
		MuiAppBar: {
			color: "secondary",
		},
	},
});
