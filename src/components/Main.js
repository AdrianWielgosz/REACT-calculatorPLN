import "../App.css";
import Input from ".//Input";
import Select from "./Select";
import Button from "./Button";
import Result from "./Result";
import { useState } from "react";

const avaibleCurr = ["EUR", "USD", "CHF"];
const Main = () => {
	const [inputVal, setInputVal] = useState(0);
	const [selectVal, setSelectVal] = useState("EUR");
	const [resultVal, setResultVal] = useState(0);


	const showInputVal = (e) => {
		setInputVal(e.target.value);
	};
	const showSelectVal = (e) => {
		setSelectVal(e.target.value);
	};
	const function1 = () => {
		fetch(`https://api.nbp.pl/api/exchangerates/tables/a/`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const selectedRate = data[0].rates.filter((element) =>
					avaibleCurr.includes(element.code)
				);
				const mid = selectedRate.find(
					(element) => element.code === selectVal
				).mid;
				setResultVal(Number.parseFloat(inputVal * mid).toFixed(2));
			});
	};

	return (
		<main className="container">
			<h1>Przelicznik walutowy</h1>
			<p className="text">
				Wybierz walutę i podaj jej ilość, aby przeliczyć jej wartość na
				PLN
			</p>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					function1();
				}}
			>
				<label>Podaj kwotę</label>
				<Input inputValue={showInputVal} />
				<Select change={showSelectVal} selected={selectVal} />
				<Button calculate={function1} />
				<Result calculate={resultVal} />
			</form>
		</main>
	);
};

export default Main;
