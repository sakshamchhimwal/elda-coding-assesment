import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./styles.css";
import { useContext } from "react";
import { UserDetailsContext } from "../../context/userContext";
const DatePicker = (props) => {
	const maxIdx = props.weeks * 7;
	const currDate = new Date(Date.now());
	const { startDate, setStartDate } = useContext(UserDetailsContext);
	const dates = [];
	for (let idx = 0; idx < maxIdx; idx++) {
		const idxDate = new Date(currDate);
		idxDate.setDate(currDate.getDate() + idx);
		const currDateStr = idxDate.toUTCString().split(" ");
		const day = currDateStr[0].substring(0, 3);
		const date = currDateStr[1];
		const month = currDateStr[2];
		dates.push(
			<Button
				variant={
					idxDate.getDate() === startDate?.getDate()
						? "contained"
						: "outlined"
				}
				sx={{
					height: "100%",
					minWidth: "100px",
					display: "flex",
					flexDirection: "column",
				}}
				color="success"
				key={idx}
				onClick={() => {
					setStartDate(idxDate);
					console.log(startDate);
				}}
			>
				<Typography
					color="success"
					fontWeight="500"
					component="p"
					textAlign="center"
				>
					{date}
					<span
						style={{
							textTransform: "lowercase",
						}}
					>
						{date === "01"
							? "st"
							: date === "02"
							? "nd"
							: date === "03"
							? "rd"
							: "th"}
					</span>
					&nbsp;{month}
				</Typography>
				<Typography
					color="success"
					fontWeight="500"
					component="p"
					textAlign="center"
				>
					{`${day}`}
				</Typography>
			</Button>
		);
	}
	return (
		<Container
			maxWidth="lg"
			sx={{
				maxHeight: "15vh",
				minHeight: "fit-content",
				width: "100%",
				display: "flex",
				alignItems: "center",
				margin: "10px 0px",
			}}
			disableGutters
		>
			<Button
				sx={{
					height: "100%",
					maxWidth: "fit-content",
				}}
				onClick={() => {
					document.getElementById("date-slot-container").scrollBy({
						top: 0,
						left: -100,
						behavior: "smooth",
					});
				}}
				className="button-shadow-right"
			>
				<ArrowBackIosNewIcon />
			</Button>
			<Container
				sx={{
					maxWidth: "100%",
					height: "100%",
					padding: "10px",
					overflowX: "scroll",
				}}
				className="hidden-scrollbar"
				id="date-slot-container"
			>
				<div
					style={{
						display: "flex",
						gap: "10px",
						height: "100%",
						alignItems: "center",
					}}
				>
					{dates}
				</div>
			</Container>
			<Button
				sx={{
					height: "100%",
					maxWidth: "fit-content",
				}}
				onClick={() => {
					document.getElementById("date-slot-container").scrollBy({
						top: 0,
						left: 100,
						behavior: "smooth",
					});
				}}
				className="button-shadow-left"
			>
				<ArrowForwardIosIcon />
			</Button>
		</Container>
	);
};

export default DatePicker;
