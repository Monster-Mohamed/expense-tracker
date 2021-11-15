import React, { Fragment } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";

const ExpenseList = ({ setSelectedYear, data, year }) => {
	const filteringDependOnYear = () => {
		const filteredData = data.filter((el) => el.date.getFullYear() === year);
		return filteredData.length !== 0
			? filteredData
			: "NOT found any items in this year";
	};

	return (
		<Fragment>
			<ExpensesChart expenses={filteringDependOnYear()} />
			<ExpensesFilter selected={year} onSetYear={setSelectedYear} />
			<Card>
				<ExpenseItem data={filteringDependOnYear()} />
			</Card>
		</Fragment>
	);
};

export default ExpenseList;
