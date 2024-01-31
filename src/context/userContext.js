import { createContext, useState } from "react";

const UserDetailsContext = createContext(null);
const UserDetailsWrapper = (props) => {
	const [userPlan, setUserPlan] = useState(null);
	const [startDate, setStartDate] = useState(null);
	const [timeSlot, setTimeSlot] = useState(null);
	const plans = [
		{
			id: 1,
			duration: 6,
			ogCost: 12999,
			newCost: 5499,
			costPm: 916,
			days: 3,
		},
		{
			id: 2,
			duration: 3,
			ogCost: 5999,
			newCost: 2999,
			costPm: 999,
			days: 3,
		},
		{
			id: 3,
			duration: 1,
			ogCost: 1999,
			newCost: 1199,
			costPm: 1199,
			days: 3,
		},
	];
	const timeSlotList = [
		{
			id: 1,
			start: "05:00PM",
			end: "05:40PM",
			days: ["MON", "TUE", "WED", "THU", "FRI", "SAT"],
		},
		{
			id: 2,
			start: "08:00AM",
			end: "08:40AM",
			days: ["MON", "TUE", "WED", "THU", "FRI", "SAT"],
		},
	];
	return (
		<UserDetailsContext.Provider
			value={{
				userPlan,
				setUserPlan,
				startDate,
				setStartDate,
				timeSlot,
				setTimeSlot,
				plans,
				timeSlotList,
			}}
		>
			{props.children}
		</UserDetailsContext.Provider>
	);
};

export { UserDetailsWrapper, UserDetailsContext };
