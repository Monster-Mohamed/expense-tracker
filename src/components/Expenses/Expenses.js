import React, { useState } from "react";

import ExpenseList from "./ExpenseList";

const Expenses = ({ data }) => {
	const [year, setYear] = useState("");

	const setSelectedYear = (selectedYear) => {
		setYear(selectedYear);
	};

	return (
		<div className="expensesParent">
			<ExpenseList setSelectedYear={setSelectedYear} data={data} year={year} />
		</div>
	);
};

export default Expenses;
