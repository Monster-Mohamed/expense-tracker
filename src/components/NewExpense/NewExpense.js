import React from "react";
import FormExpense from "./FormExpense";

const NewExpense = ({ onSaveNewExpense }) => {
	const saveExpense = (expensedata) => {
		const expdata = { ...expensedata, id: Math.random() };
		onSaveNewExpense(expdata);
	};

	return (
		<div className="new-expense">
			<FormExpense onSaveExpense={saveExpense} />
		</div>
	);
};

export default NewExpense;
