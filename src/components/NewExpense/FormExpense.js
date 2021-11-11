import React, { useState } from "react";

const FormExpense = () => {
	const [formData, setFormData] = useState({
		title: "",
		amount: "",
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
			return { ...prevState, date: eo.target.value };
		});
	};
	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={changeTitle} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" min="0" step="0" onChange={changeAmount} />
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
