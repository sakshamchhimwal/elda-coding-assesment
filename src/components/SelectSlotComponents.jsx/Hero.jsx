import  Typography  from "@mui/material/Typography";
import Container from "@mui/material/Container";
const Hero = () => {
	return (
		<Container
			maxWidth="lg"
			sx={{
				paddingTop: "30px",
			}}
			disableGutters
		>
			<Typography
				variant="h2"
				fontWeight="800"
				color="text.primary"
				textAlign="center"
			>
				Checkout
			</Typography>
			<Typography
				variant="h6"
				fontWeight="500"
				gutterBottom
				component="p"
				color="text.primary"
			>
				Yoga for Mind
			</Typography>
			<video
				controls
				style={{
					width: "100%",
					maxHeight: "40vh",
					objectFit: "cover",
					borderRadius: "14px",
				}}
			>
				<source src="/elda-coding-assesment/assets/yoga.mp4" />
			</video>
			<div
				style={{
					position: "relative",
					width: "100%",
					marginTop: "4px",
				}}
			>
				<img
					src="/elda-coding-assesment/assets/flower-bg-remove.png"
					height="20px"
					width="25px"
					style={{
						position: "absolute",
					}}
				/>
				<Typography variant="h6" color="text.primary" marginLeft="22px">
					What is Yoga for Mind?
				</Typography>
			</div>
			<Typography component="p" color="text.hint" variant="body">
				The Yoga for Mind sessions involve minimal physical movement and
				relies on techniques such as pranayama and meditation. Suited
				for women who cannot perform more physical forms of yoga and are
				looking for relied from concerns such as stress, axiety, low
				mood, etc.
			</Typography>
		</Container>
	);
};

export default Hero;
