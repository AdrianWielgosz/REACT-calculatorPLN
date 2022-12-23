import React, { useState } from "react";
const blockInvalidChar = (e) =>
	["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
const Input = ({ inputValue }) => {
	const [setValue] = useState("");
	return (
		<input
			type="number"
            onInput={inputValue}
            className="amount" min="0" placeholder="Podaj kwotę"
			onKeyDown={blockInvalidChar}
			onChange={({ target: { value } }) => {
				setValue(value);
			}}
		/>
	);
};
export default Input;
