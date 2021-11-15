import React, { useState } from "react";
import FormExpense from "./FormExpense";

const NewExpense = ({ onSaveNewExpense }) => {
	const [showHide, setShowHide] = useState(false);
	const saveExpense = (expensedata) => {
		const expdata = { ...expensedata, id: Math.random() };
		onSaveNewExpense(expdata);
	};

	const showOrHide = (eo) => {
		eo.preventDefault();
		showHide === true ? setShowHide(false) : setShowHide(true);
	};

	return (
		<div className="new-expense">
			<button className={showHide === true ? "close" : ""} onClick={showOrHide}>
				{showHide === true ? "Close" : "Add new expense"}
			</button>
			{showHide && <FormExpense onSaveExpense={saveExpense} />}
		</div>
	);
};

export default NewExpense;
