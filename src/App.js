import "./App.css";
import { useState } from "react";

// one input box, one todo list box

function App() {
  const [items, setItems] = useState([]);
  const [price, setPrice] = useState([]);
  const [p, setP] = useState();
  const [i, setI] = useState("");
  const [t, setT] = useState(0);

  return (
    <div className="Todo">
      <h2 class="heading">Expense Calculator</h2>
      <div className="input_1">
        <h3 class="abc">Items:</h3>
        <input
          class="input_box"
          value={i}
          className="items"
          onChange={(e1) => setI(e1.target.value)}
        />
        <h3 class="abc">Price:</h3>
        <input
          class="input_box"
          value={p}
          className="price"
          onChange={(e2) => setP(e2.target.value)}
        />
        <button
          class="button"
          onClick={() => {
            setItems([...items, i]);
            setPrice([...price, p]);
            setI("");
            setP("");
            setT(t + parseFloat(p));
          }}
        >
          Add
        </button>
      </div>

      <div className="list_box">
        <ul class="list">
          {items.map((el, index) => (
            <li>{el} :</li>
          ))}
        </ul>
        <ul class="list">
          {price.map((el, index) => (
            <li>$ {el}</li>
          ))}
        </ul>
      </div>
      <h2 class="total">Total Expenses: ${t}</h2>
    </div>
  );
}

export default App;
