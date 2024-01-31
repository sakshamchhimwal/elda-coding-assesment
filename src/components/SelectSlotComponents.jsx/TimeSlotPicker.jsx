import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useContext, useState } from "react";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import { UserDetailsContext } from "../../context/userContext";

const Item = (props) => {
	const [ele, setEle] = useState(1);
	return (
		<Paper
			elevation={ele}
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "4px",
				padding: "8px",
				width: "100%",
			}}
			component="div"
			onMouseEnter={() => setEle(3)}
			onMouseLeave={() => setEle(1)}
		>
			<Typography
				color="text.hint"
				component="p"
				variant="body1"
				fontWeight="500"
				display="flex"
				alignItems="center"
			>
				<WatchLaterIcon
					sx={{
						scale: "0.9",
					}}
				/>{" "}
				{props.slot.start} - {props.slot.end}
			</Typography>
			<Typography
				color="text.hint"
				component="p"
				variant="body"
				fontWeight="500"
			>
				{props.slot.days.map((day, idx) => {
					return <span key={idx}>{day}, </span>;
				})}
			</Typography>
		</Paper>
	);
};

const TimeSlotPicker = (props) => {
	const slots = props.slots;
	const { timeSlot, setTimeSlot } = useContext(UserDetailsContext);
	return (
		<FormControl
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "20px",
			}}
		>
			{slots.map((slot) => {
				return (
					<div
						style={{
							display: "flex",
							alignItems: "center",
						}}
						key={slot.id}
						onClick={() => setTimeSlot(slot.id)}
					>
						<Radio
							checked={slot.id === timeSlot}
							onChange={() => {
								setTimeSlot(slot.id);
							}}
						/>
						<Item slot={slot} />
					</div>
				);
			})}
		</FormControl>
	);
};

export default TimeSlotPicker;
