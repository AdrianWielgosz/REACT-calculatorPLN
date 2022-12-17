const Select = ({ change, selected }) => {
	return (
		<>
			<label>Podaj kwotę:</label>
			<select onChange={change} className="from" value={selected}>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CHF">CHF</option>
			</select>
		</>
	);
};
export default Select;
