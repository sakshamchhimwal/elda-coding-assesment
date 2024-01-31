import "../components/LoginComponents/styles.css";
import React, { useState, useRef, useContext } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import PhoneLogin from "../components/LoginComponents/PhoneLogin";
import EmailLogin from "../components/LoginComponents/EmailLogin";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import OTPWindow from "../components/LoginComponents/EnterOTP";

const Login = () => {
	const nodeRef = useRef(null);
	const {
		isAuth,
		setIsAuth,
		loginType,
		loginDets,
		setLoginType,
		setLoginDets,
	} = useContext(AuthContext);
	const [isOtp, setIsOtp] = useState(false);
	const navigator = useNavigate();
	if (isAuth === true) {
		navigator("/home");
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ loginType, loginDets });
	};
	const handleVerify = (e) => {
		e.preventDefault();
		setIsAuth(true);
		navigator("/home");
	};
	return (
		<Container
			maxWidth="lg"
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "10px",
				height: "100vh",
				justifyContent: "center",
			}}
		>
			<img
				src="./elda-coding-assesment/assets/flower-bg-remove.png"
				style={{
					height: "80px",
					width: "88px",
				}}
			/>
			<div
				style={{
					display: "flex",
					gap: "20px",
					flexDirection: "column",
					marginLeft: "10%",
				}}
			>
				<Typography
					variant="h3"
					color="text.primary"
					sx={{
						fontWeight: "600",
					}}
				>
					Login to your account
				</Typography>
				<ButtonGroup
					size="large"
					variant="outlined"
					sx={{
						margin: "auto 0",
					}}
				>
					<Button
						variant={loginType === 1 ? "contained" : "outlined"}
						color="primary"
						onClick={() => {
							setLoginType(1);
						}}
					>
						<Typography
							variant="body1"
							color={loginType === 1 ? "white" : "text.secondary"}
							fontWeight="600"
						>
							Email
						</Typography>
					</Button>
					<Button
						variant={loginType !== 1 ? "contained" : "outlined"}
						color="primary"
						onClick={() => {
							setLoginType(0);
						}}
					>
						<Typography
							variant="body1"
							color={loginType !== 1 ? "white" : "text.secondary"}
							fontWeight="600"
						>
							Phone Number
						</Typography>
					</Button>
				</ButtonGroup>
				{!isOtp && (
					<>
						<form onSubmit={handleSubmit}>
							<div ref={nodeRef}>
								{loginType !== 1 ? (
									<PhoneLogin
										setLoginDets={setLoginDets}
										loginDets={loginDets}
									/>
								) : (
									<EmailLogin
										setLoginDets={setLoginDets}
										loginDets={loginDets}
									/>
								)}
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									marginLeft: "5%",
									alignItems: "center",
								}}
							>
								<Checkbox required />
								<Typography variant="body">
									I agree with the{" "}
									<Typography
										component="a"
										href="#"
										color="primary"
									>
										{" "}
										Terms & Conditions
									</Typography>{" "}
									and{" "}
									<Typography
										component="a"
										href="#"
										color="primary"
									>
										Privacy Policy
									</Typography>{" "}
									of Elda Health.
								</Typography>
							</div>
							<div
								style={{
									width: "100%",
									padding: "40px 0",
									display: "flex",
									justifyContent: "center",
								}}
							>
								<Button
									variant="contained"
									sx={{
										margin: "auto",
										maxWidth: "fit-content",
									}}
									type="submit"
									onClick={() => setIsOtp(true)}
								>
									<Typography
										variant="body"
										fontWeight="600"
										color="white"
									>
										Send OTP
									</Typography>{" "}
								</Button>
							</div>
						</form>
					</>
				)}
				{isOtp && (
					<form onSubmit={handleVerify}>
						<OTPWindow />
						<div
							style={{
								width: "90%",
								padding: "40px 0",
								display: "flex",
								justifyContent: "center",
							}}
						>
							<Button
								variant="contained"
								sx={{
									margin: "auto",
									maxWidth: "fit-content",
								}}
								type="submit"
							>
								<Typography
									variant="body"
									fontWeight="600"
									color="white"
								>
									Verify OTP
								</Typography>{" "}
							</Button>
						</div>
					</form>
				)}
			</div>
		</Container>
	);
};

export default Login;
