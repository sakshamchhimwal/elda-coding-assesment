import { useState } from "react";
import OtpInput from "react-otp-input";
import Container from "@mui/material/Container";
import Circle  from "@mui/icons-material/Circle";
import { Typography, useMediaQuery } from "@mui/material";

const OTPWindow = () => {
	const [otp, setOtp] = useState("");
	const isMobile = useMediaQuery("(max-width:768px)");

	return (
		<Container
			maxWidth={!isMobile?"lg":"sm"}
			sx={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				gap: "8px",
			}}
		>
			<Typography variant="h6" fontWeight="200" color="text.primary" gutterBottom>
				Enter OTP
			</Typography>
			<OtpInput
				value={otp}
				onChange={setOtp}
				numInputs={4}
				renderSeparator={<Circle sx={{
                    margin:!isMobile?"20px":"10px",
					fontSize:!isMobile?"15px":"8px"
                }}/>}
				renderInput={(props) => (
					<input
						{...props}
						style={{
							height: !isMobile?"80px":"40px",
							width: !isMobile?"80px":"40px",
                            fontSize:!isMobile?"50px":"24px",
                            textAlign:"center"
						}}
					/>
				)}
			/>{" "}
		</Container>
	);
};

export default OTPWindow;
