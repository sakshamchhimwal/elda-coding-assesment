import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useMediaQuery } from "@mui/material";

const EmailLogin = (props) => {
	const { loginDets, setLoginDets } = props;
	const isMobile = useMediaQuery("(max-width:768px)");

	return (
		<Container
			className="phoneInput"
			maxWidth="md"
			sx={{
				display: "flex",
				margin: "auto 0",
			}}
			disableGutters
		>
			<div>
				<TextField
					type="email"
					sx={{
						width: !isMobile?"70ch":"auto",
					}}
					label="Email address"
					value={loginDets.emailAddress}
					onChange={(e) => {
						setLoginDets({
							...loginDets,
							emailAddress: e.target.value,
						});
					}}
					required
				/>
			</div>
		</Container>
	);
};

export default EmailLogin;
