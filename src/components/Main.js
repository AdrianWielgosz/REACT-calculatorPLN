import "../App.css";
import Input from ".//Input";
import Select from "./Select";
import Button from "./Button";

const Main = () => {
  const convert = document.getElementsByClassName(".convert");
  const result = document.getElementByClassName(".result");
  const amount = document.getElementByClassName(".amount");

  convert.addEventListener("click", function () {
    fetch(`https://api.nbp.pl/api/exchangerates/tables/a/`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const rates = data[0].rates;
        const selectedRate = rates.find(
          (el) => el.code === document.querySelector("#from").value
        );
  
        const total = amount.value * selectedRate.mid;
        if (amount.value <= 0) {
          return alert("musisz podać liczbę większą od zera!");
        }
        result.innerHTML = ` to ${total.toFixed(2)} PLN`;
      });
  });
  return (
    <main className="container">
      <h1>Przelicznik walutowy</h1>
      <p className="text">
			Wybierz walutę i podaj jej ilość, aby przeliczyć jej wartość na PLN
		</p>
    <form>
      <label>Podaj kwotę</label>
      <Input/>
      <Select/>
      <Button />

      <p className="result"></p>
    </form>
    </main>
  );
}

export default Main;