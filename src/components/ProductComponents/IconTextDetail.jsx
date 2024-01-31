import Grid from "@mui/material/Unstable_Grid2";

const IconTextDetail = (props) => {
	const { icon } = props;
	return (
		<Grid container spacing={3}>
			<Grid xs="auto">{icon}</Grid>
			<Grid xs>{props.children}</Grid>
		</Grid>
	);
};

export default IconTextDetail;
