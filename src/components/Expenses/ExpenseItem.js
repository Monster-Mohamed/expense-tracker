import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ data }) => {
	const getAllExpense = () => {
		return data.map((el, idx) => {
			return (
				<div className="expense-item" key={idx}>
					<div className="expense-item__description">
						<ExpenseDate date={el.date} />
						<h2>{el.title}</h2>
						<div className="expense-item__price">${el.amount}</div>
					</div>
				</div>
			);
		});
	};

	return getAllExpense();
};

export default ExpenseItem;
