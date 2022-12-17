const Input = ({inputValue}) => {
    const blockMin = (e) => {
        if(
            e.code==="Minus"
        ){e.preventDefault()}; 
    }
    return (
        <input type="number" onInput={inputValue} onKeyDown={blockMin} className="amount" min="0" placeholder="Podaj kwotę"/>
    );
  };
  export default Input;