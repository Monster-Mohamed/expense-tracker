import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ data }) => {
	return (
		<Card>
			<ExpenseItem
				title={data[0].title}
				amount={data[0].amount}
				date={data[0].date}
			/>
			<ExpenseItem
				title={data[1].title}
				amount={data[1].amount}
				date={data[1].date}
			/>
			<ExpenseItem
				title={data[2].title}
				amount={data[2].amount}
				date={data[2].date}
			/>
		</Card>
	);
};

export default Expenses;
