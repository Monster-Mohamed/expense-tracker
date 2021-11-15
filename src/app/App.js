import { useState } from "react";
import Expenses from "../components/Expenses/Expenses";
import NewExpense from "../components/NewExpense/NewExpense";
import "../style/app.css";

const App = () => {
	const [expense, setExpense] = useState([
		{
			id: 1,
			title: "Car",
			amount: 300,
			date: new Date(2021, 2, 28),
		},
		{
			id: 2,
			title: "PS5",
			amount: 500,
			date: new Date(2022, 5, 10),
		},
		{
			id: 3,
			title: "PC",
			amount: 200,
			date: new Date(2019, 8, 19),
		},
	]);

	const saveNewExpense = (expensedata) => {
		const expdata = { ...expensedata, amount: parseInt(expensedata.amount) };
		setExpense((prevState) => [expdata, ...prevState]);
	};

	return (
		<div className="App">
			<NewExpense onSaveNewExpense={saveNewExpense} />
			<Expenses data={expense} />
		</div>
	);
};

export default App;
