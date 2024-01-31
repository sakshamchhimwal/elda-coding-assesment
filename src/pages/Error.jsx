import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
const Error = () => {
	<Container
		maxWidth="xl"
		sx={{
			width: "100%",
			height: "100vh",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		}}
	>
		<Typography variant="h1" color="error" fontWeight="900">
			Something Went Wrong.
			<Link
				to="/"
				style={{
					textDecoration: "none",
					color: "inherit",
				}}
			>
				RESET
			</Link>
		</Typography>
	</Container>;
};


export default Error;