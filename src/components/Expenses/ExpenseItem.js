import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ title, amount, date }) => {
	const [myTitle, setMyTitle] = useState(title);
	const changeTitle = () => {
		setMyTitle(`Hello World`);
	};
	return (
		<div className="expense-item">
			<ExpenseDate date={date} />
			<div className="expense-item__description">
				<h2>{myTitle}</h2>
				<div onClick={changeTitle} className="expense-item__price">
					${amount}
				</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
