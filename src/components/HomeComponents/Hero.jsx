import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useMediaQuery } from "@mui/material";
const Hero = () => {
	const isTablet = useMediaQuery("(max-width:768px)");

	return (
		<Container
			maxWidth="lg"
			sx={{
				paddingTop: "30px",
				paddingBottom: "60px",
			}}
			disableGutters
		>
			<div
				style={{
					width: "100%",
					display: "flex",
					flexDirection: !isTablet ? "row" : "column",
				}}
			>
				<div
					style={{
						flex: "1",
						marginTop: "7%",
					}}
				>
					<Typography
						variant="h2"
						color="text.primary"
						fontWeight="800"
						gutterBottom
					>
						Yoga for Mind
					</Typography>
					<Typography variant="h6" color="text.hint">
						Watch our Lead Yoga Therapist,{" "}
						<Typography
							variant="h6"
							color="text.hint"
							component="a"
							href="#"
							sx={{
								textDecoration: "underline",
							}}
						>
							{" "}
							Ms&nbsp;Uma&nbsp;Subramaniam
						</Typography>{" "}
						explain Yoga for Mind
					</Typography>
				</div>
				<div
					style={{
						flex: "1",
					}}
				>
					<video
						style={{
							aspectRatio: "16/9",
							width: "100%",
						}}
						controls
					>
						<source src="./assets/yoga.mp4" />
					</video>
				</div>
			</div>
		</Container>
	);
};

export default Hero;
