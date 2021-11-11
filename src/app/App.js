import Expenses from "../components/Expenses/Expenses";
import NewExpense from "../components/NewExpense/NewExpense";
import "../style/app.css";

const App = () => {
	const expense = [
		{
			title: "Car",
			amount: 300,
			date: new Date(2021, 2, 28),
		},
		{
			title: "PS5",
			amount: 500,
			date: new Date(2022, 5, 10),
		},
		{
			title: "PC",
			amount: 200,
			date: new Date(2025, 8, 19),
		},
	];
	return (
		<div className="App">
			<NewExpense />
			<Expenses data={expense} />
		</div>
	);
};

export default App;
