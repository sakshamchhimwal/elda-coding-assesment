import { createContext, useState } from "react";

const AuthContext = createContext(null);

const AuthContextWrapper = (props) => {
	const [isAuth, setIsAuth] = useState(false);
	const [loginType, setLoginType] = useState(0);
	const [loginDets, setLoginDets] = useState({
		phoneNumber: "",
		countryCode: "",
		emailAddress: "",
	});
	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth,
				loginType,
				setLoginType,
				loginDets,
				setLoginDets,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export { AuthContextWrapper, AuthContext };
