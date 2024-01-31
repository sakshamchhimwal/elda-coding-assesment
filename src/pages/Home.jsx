import { Button, Typography, useMediaQuery } from "@mui/material";
import Hero from "../components/HomeComponents/Hero";
import Container from "@mui/material/Container";
import IconCard from "../components/HomeComponents/IconCard";
import AngryMan from "../utils/icons/AngryMan";
import HeartBeat from "../utils/icons/HeartBeat";
import TreadMill from "../utils/icons/TreadMill";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";

const Home = () => {
	const navigator = useNavigate();
	const isLaptop = useMediaQuery("(max-width:1024px)");
	const isTablet = useMediaQuery("(max-width:768px)");
	const isMobile = useMediaQuery("(max-width:450px)");
	const { isAuth } = useContext(AuthContext);
	useEffect(() => {
		if (!isAuth) {
			navigator("/");
		}
	}, []);
	return (
		<Container maxWidth="lg">
			<Hero />
			<Typography variant="h6" color="text.disabled" gutterBottom>
				Is this for you?
			</Typography>
			<Container
				maxWidth="lg"
				disableGutters
				sx={{
					display: "flex",
					gap: "20px",
				}}
			>
				<div
					className="iconCards"
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: !isLaptop ? "center" : "flex-start",
						flexDirection: !isMobile ? "row" : "column",
					}}
				>
					<IconCard icon={<AngryMan />}>
						<Typography
							variant="body"
							color="text.primary"
							fontSize={!isLaptop ? "18px" : "15px"}
							component="p"
							className="icon-card-text"
						>
							Hard to feel calm or sleep because of stress.
						</Typography>
					</IconCard>
					<IconCard icon={<HeartBeat />}>
						<Typography
							variant="body"
							color="text.primary"
							fontSize={!isLaptop ? "18px" : "15px"}
							component="p"
							className="icon-card-text"
						>
							If you have plapitations and breathing trouble.
						</Typography>
					</IconCard>
					<IconCard icon={<TreadMill />}>
						<Typography
							variant="body"
							color="text.primary"
							fontSize={!isLaptop ? "18px" : "15px"}
							component="p"
							className="icon-card-text"
						>
							You have been advised by the doctors to avoid
							physical activity.
						</Typography>
					</IconCard>
				</div>
			</Container>
			<Container
				maxWidth="lg"
				sx={{
					display: "flex",
					justifyContent: "space-between",
					margin: !isTablet ? "30px 0" : "10px 0",
					flexDirection: !isMobile ? "row" : "column",
					alignItems: !isMobile ? "" : "center",
					gap: "8px",
				}}
			>
				<Button
					variant="outlined"
					className="round-button"
					sx={{
						padding: !isTablet ? "4px 50px" : "4px 20px",
						maxWidth: !isMobile ? "100%" : "fit-content",
					}}
				>
					Book trail @99
				</Button>
				<Button
					variant="contained"
					className="round-button"
					sx={{
						padding: !isTablet ? "4px 50px" : "4px 20px",
						maxWidth: !isMobile ? "100%" : "fit-content",
					}}
					onClick={() => {
						navigator("/products");
					}}
				>
					<Typography fontWeight="500" color="white" fontSize="12px">
						I want to buy
					</Typography>
				</Button>
				<Button
					className="round-button"
					sx={{
						padding: !isTablet ? "4px 50px" : "4px 20px",
						maxWidth: !isMobile ? "100%" : "fit-content",
					}}
				>
					<Typography
						component="a"
						href="#"
						color="text.hint"
						fontSize="12px"
					>
						I have a question
					</Typography>
				</Button>
			</Container>
		</Container>
	);
};

export default Home;
