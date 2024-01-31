import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import { UserDetailsContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
const PackageCard = (props) => {
	const { id, duration, ogCost, newCost, costPm } = props.offer;
	const [elevation, setElevation] = useState(1);
	const { setUserPlan } = useContext(UserDetailsContext);
	const navigate = useNavigate();
	return (
		<Paper
			sx={{
				display: "flex",
				padding: "18px 6px",
				margin: "10px 0",
				justifyContent: "space-between",
			}}
			elevation={elevation}
			component="div"
			onMouseEnter={() => setElevation(3)}
			onMouseLeave={() => setElevation(1)}
		>
			<div>
				<Typography
					variant="h4"
					color="text.primary"
					sx={{
						fontSize: "20px",
					}}
				>
					{duration} Month{duration > 1 ? "s" : ""}
				</Typography>
				<Typography
					component="span"
					variant="h5"
					color="text.hint"
					sx={{
						textDecoration: "line-through",
						fontSize: "14px",
					}}
				>
					&#8377;{ogCost}
				</Typography>{" "}
				<Typography
					component="span"
					variant="h4"
					color="text.disabled"
					sx={{
						fontSize: "18px",
					}}
				>
					&#8377;{newCost}
				</Typography>
			</div>
			<div>
				<Typography
					component="p"
					variant="h6"
					color="text.hint"
					sx={{
						fontSize: "11px",
					}}
				>
					&#8377;{costPm}/month
				</Typography>
				<Button
					variant="contained"
					className="round-button"
					onClick={() => {
						setUserPlan(id);
						navigate("/checkout");
					}}
				>
					<Typography color="white" fontSize="12px">
						Buy Now
					</Typography>
				</Button>
			</div>
		</Paper>
	);
};

export default PackageCard;
