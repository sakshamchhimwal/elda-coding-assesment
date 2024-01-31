import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";
const PackageReview = (props) => {
	const { duration, ogCost, newCost, days } = props.plan;
	const isMobile = useMediaQuery("(max-width:450px)");
	return (
		<Paper
			sx={{
				display: "flex",
				padding: "18px 6px",
				margin: "10px 0",
				justifyContent: "space-between",
			}}
			elevation={0}
			component="div"
		>
			<div>
				<Typography
					variant="h4"
					color="text.primary"
					sx={{
						fontSize: "20px",
					}}
				>
					{duration} Month{duration > 1 ? "s" : ""} Yoga for Mind
				</Typography>
				<Typography
					component="span"
					variant="h5"
					color="text.hint"
					sx={{
						// textDecoration: "line-through",
						fontSize: "15px",
					}}
				>
					{days} days a week.{" "}
					<Link
						to="/products"
						style={{
							color: "inherit",
							textDecoration: "none",
						}}
					>
						<Typography
							color="text.secondary"
							component={!isMobile ? "span" : "p"}
						>
							Change Plan
						</Typography>
					</Link>
				</Typography>
			</div>
			<div
				style={{
					textAlign: "end",
				}}
			>
				<Typography
					component="p"
					variant="h5"
					color="text.disabled"
					sx={{
						fontSize: "18px",
					}}
				>
					&#8377;{newCost}
				</Typography>
				<Typography
					component="p"
					variant="h5"
					color="text.hint"
					sx={{
						fontSize: "20px",
						textDecoration: "line-through",
					}}
				>
					&#8377;{ogCost}
				</Typography>
			</div>
		</Paper>
	);
};

export default PackageReview;
