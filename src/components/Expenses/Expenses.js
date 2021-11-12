import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ data }) => {
	const [year, setYear] = useState("");

	const setSelectedYear = (selectedYear) => {
		return setYear(selectedYear);
	};

	return (
		<div className="expensesParent">
			<ExpensesFilter selected={year} onSetYear={setSelectedYear} />
			<Card>
				<ExpenseItem data={data} />
			</Card>
		</div>
	);
};

export default Expenses;
