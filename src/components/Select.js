const Select = () => {
    return (
      <>
        <label>Podaj kwotę:</label>
        <select className="from">
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CHF">CHF</option>
			</select>
      </>
    );
  };
  export default Select;