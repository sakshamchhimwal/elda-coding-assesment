import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import PackageCard from "../components/ProductComponents/PackageCard";
import IconTextDetail from "../components/ProductComponents/IconTextDetail";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import LockClock from "@mui/icons-material/LockClock";
import { useContext, useEffect } from "react";
import { UserDetailsContext } from "../context/userContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Products = () => {
	const { plans } = useContext(UserDetailsContext);
	const changeFlex = useMediaQuery("(min-width:690px)");
	const { isAuth } = useContext(AuthContext);
	const navigator = useNavigate();
	useEffect(() => {
		if (!isAuth) {
			navigator("/");
		}
	}, []);
	return (
		<Container maxWidth="lg">
			<Typography
				variant="h2"
				color="text.primary"
				fontWeight="800"
				textAlign="center"
				gutterBottom
			>
				Products
			</Typography>
			<Container
				maxWidth="lg"
				disableGutters
				sx={{
					display: "flex",
					flexDirection: changeFlex ? "row" : "column",
				}}
			>
				<Container
					component="div"
					sx={{
						flex: "1",
						marginBottom: "20px",
					}}
				>
					<Typography variant="h5" color="text.primary" gutterBottom>
						Yoga for Mind
					</Typography>
					<Container component="div" disableGutters>
						<img
							src="/elda-coding-assesment/assets/yoga.jpg"
							width="100%"
							height="100%"
							style={{
								borderRadius: "12px",
							}}
						/>
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
							<Typography
								variant="h6"
								color="text.primary"
								marginLeft="22px"
							>
								What is Yoga for Mind?
							</Typography>
						</div>
						<Typography
							component="p"
							color="text.hint"
							variant="body"
							marginLeft="24px"
						>
							The Yoga for Mind sessions involve minimal physical
							movement and relies on techniques such as pranayama
							and meditation. Suited for women who cannot perform
							more physical forms of yoga and are looking for
							relied from concerns such as stress, axiety, low
							mood, etc.
						</Typography>
					</Container>
				</Container>
				<Container
					component="div"
					sx={{
						flex: "1",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					<Typography variant="h5" color="text.primary" gutterBottom>
						Choose your package
					</Typography>
					{plans.map((offer) => {
						return <PackageCard offer={offer} key={offer.id} />;
					})}
					<Typography variant="h6" color="text.primary" gutterBottom>
						What you'll get
					</Typography>
					<IconTextDetail
						icon={
							<ForumRoundedIcon
								style={{
									color: "#81B0B0",
								}}
							/>
						}
					>
						<Typography
							component="span"
							color="text.hint"
							variant="body"
						>
							A chat group on the Elda App where you can connect
							with your trainer and the rest of the Elda yoga
							community.
						</Typography>
					</IconTextDetail>
					<IconTextDetail
						icon={
							<LockClock
								style={{
									color: "#81B0B0",
								}}
							/>
						}
					>
						<Typography
							component="span"
							color="text.hint"
							variant="body"
						>
							Ablity to reschedule the class if you miss one.
						</Typography>
					</IconTextDetail>
				</Container>
			</Container>
		</Container>
	);
};

export default Products;
