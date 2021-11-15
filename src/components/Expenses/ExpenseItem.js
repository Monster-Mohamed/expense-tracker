import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ data }) => {
	const getAllExpense = () => {
		if (typeof data !== "string") {
			return data.map((el) => {
				return (
					<div className="expense-item" key={el.id}>
						<div className="expense-item__description">
							<ExpenseDate date={el.date} />
							<h2>{el.title}</h2>
							<div className="expense-item__price">${el.amount}</div>
						</div>
					</div>
				);
			});
		} else {
			return <h2 className="expense_heading2">{data}</h2>;
		}
	};

	return getAllExpense();
};

export default ExpenseItem;
