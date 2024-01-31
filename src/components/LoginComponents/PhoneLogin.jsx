import React, { useState } from "react";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { countryMap } from "../../utils/allFlagIcons";
import { useMediaQuery } from "@mui/material";

const PhoneLogin = (props) => {
	const { loginDets, setLoginDets } = props;
	const isMobile = useMediaQuery("(max-width:768px)");
	return (
		<Container
			className="phoneInput"
			maxWidth="md"
			sx={{
				display: "flex",
				margin: "auto 0",
			}}
			disableGutters
		>
			<div
				style={{
					minWidth: "30px",
				}}
			>
				<FormControl
					sx={{
						width: !isMobile ? "100px" : "auto",
					}}
				>
					{!isMobile && (
						<InputLabel id="demo-simple-select-label">
							Country
						</InputLabel>
					)}
					<Select
						value={
							countryMap[loginDets.countryCode]
								? loginDets.countryCode
								: ""
						}
						label={!isMobile && "Country"}
						sx={{
							maxHeight: "57px",
						}}
						onChange={(e) => {
							setLoginDets({
								...loginDets,
								countryCode: e.target.value,
							});
						}}
						required
					>
						{Object.keys(countryMap).map((country) => {
							return (
								<MenuItem value={country} key={country}>
									<div
										style={{
											aspectRatio: "3/2",
											height: !isMobile ? "30px" : "20px",
										}}
									>
										{countryMap[country]}
									</div>
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
			</div>
			<div>
				<TextField
					type="number"
					sx={{
						width: !isMobile ? "30ch" : "auto",
						height: "60px",
					}}
					value={loginDets.phoneNumber}
					onChange={(e) => {
						setLoginDets({
							...loginDets,
							phoneNumber: e.target.value,
						});
					}}
					label="Phone Number"
					required
				/>
			</div>
		</Container>
	);
};

export default PhoneLogin;
