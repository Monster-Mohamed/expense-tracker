import React, { useState } from "react";

const FormExpense = ({ onSaveExpense }) => {
	const [formData, setFormData] = useState({
		title: "",
		amount: 0,
		date: "",
	});

	const changeTitle = (eo) => {
		setFormData((prevState) => {
			return { ...prevState, title: eo.target.value };
		});
	};
	const changeAmount = (eo) => {
		setFormData((prevState) => {
			return { ...prevState, amount: eo.target.value };
		});
	};
	const changeDate = (eo) => {
		setFormData((prevState) => {
			return { ...prevState, date: new Date(eo.target.value) };
		});
	};

	const submitHandler = (eo) => {
		eo.preventDefault();
		const expenseData = formData;
		onSaveExpense(expenseData);
		setFormData({ title: "", amount: 0, date: new Date() });
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={formData.title} onChange={changeTitle} />
				</div>
				<div className="new-expense__control">
					<label>Price</label>
					<input
						type="number"
						min="0"
						step="0"
						value={formData.amount}
						onChange={changeAmount}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2020-01-01"
						max="2023-12-31"
						onChange={changeDate}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default FormExpense;
