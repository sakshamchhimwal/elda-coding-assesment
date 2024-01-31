import Container from "@mui/material/Container";
import Hero from "../components/SelectSlotComponents.jsx/Hero";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import PackageReview from "../components/SelectSlotComponents.jsx/PackageReview";
import DatePicker from "../components/SelectSlotComponents.jsx/DatePicker";
import TimeSlotPicker from "../components/SelectSlotComponents.jsx/TimeSlotPicker";
import Button from "@mui/material/Button";
import { useContext, useEffect } from "react";
import { UserDetailsContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/authContext";
const CheckOut = () => {
	const navigator = useNavigate();
	const { isAuth } = useContext(AuthContext);
	useEffect(() => {
		if (!isAuth) {
			navigator("/");
		}
	}, []);
	const { timeSlotList, plans, userPlan, timeSlot, startDate } =
		useContext(UserDetailsContext);
	useEffect(() => {
		if (userPlan === null) {
			navigator("/products");
		}
	}, []);

	const handleSubmit = () => {
		if (timeSlot === null) {
			console.log(timeSlot);
			return toast.error("Please fill time slot!");
		}
		if (startDate === null) {
			return toast.error("Please fill start date!");
		}
		console.log({
			userPlan,
			timeSlot,
			startDate,
		});
		navigator("/home");
	};

	function handleClick(event) {
		event.preventDefault();
		const splitted = event.target.href.split("/");
		navigator(`/${splitted[splitted.length - 1]}`);
	}
	const userPlanDets = plans.filter((ele) => {
		return userPlan === ele.id;
	})[0];
	const breadcrumbs = [
		<Link
			underline="hover"
			key="1"
			color="inherit"
			href="/home"
			onClick={handleClick}
		>
			Yoga
		</Link>,
		<Link
			underline="hover"
			key="2"
			color="inherit"
			href="/products"
			onClick={handleClick}
		>
			Yoga for Mind
		</Link>,
		<Typography key="3" color="text.primary">
			Package
		</Typography>,
	];
	return (
		<>
			<ToastContainer />
			{userPlan != null && (
				<Container
					maxWidth="lg"
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "3vh",
						paddingBottom: "30px",
					}}
				>
					<Hero />
					<Breadcrumbs
						separator={<NavigateNextIcon fontSize="small" />}
						aria-label="breadcrumb"
					>
						{breadcrumbs}
					</Breadcrumbs>
					<PackageReview plan={userPlanDets} />
					<div>
						<Typography
							variant="h6"
							color="text.primary"
							sx={{
								paddingBottom: "0px",
								marginBottom: "0px",
							}}
						>
							Pick a Start Date
						</Typography>
						<Typography variant="body1" color="text.hint">
							Dates are available only for the next 2 weeks.
						</Typography>
						<DatePicker weeks={2} />
					</div>
					<div>
						<Typography
							variant="h6"
							color="text.primary"
							sx={{
								paddingBottom: "0px",
								marginBottom: "0px",
							}}
						>
							Select Time Slot
						</Typography>
						<TimeSlotPicker slots={timeSlotList} />
					</div>
					<Button
						variant="contained"
						className="round-button"
						sx={{
							margin: "0 0 0 8vw",
							maxWidth: "fit-content",
							padding: "6px 20px",
						}}
						onClick={handleSubmit}
					>
						<Typography color="white" fontWeight="300">
							Buy Package
						</Typography>
					</Button>
				</Container>
			)}
		</>
	);
};

export default CheckOut;
