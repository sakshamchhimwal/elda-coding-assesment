import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";

const IconCard = (props) => {
	// console.log(props.children);
	const { icon } = props;
	return (
		<Container
			maxWidth="md"
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				gap: "20px",
			}}
		>
			<div
				style={{
					background: "#D7D7D7",
					height: "100px",
					width: "100px",
					borderRadius: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{icon}
			</div>
			<div>{props.children}</div>
		</Container>
	);
};

export default IconCard;
