import logo from "./logo.svg";
import "./App.css";
import Objects from "./objects/objects";

function App() {
  const products = [
    { name: "Apache200", year: "2020", price: "150000", value: 0 },
    { name: "Fz250", year: "2022", price: "180000", value: 1 },
    { name: "HondaHness", year: "2021", price: "240000", value: 2 },
  ];

  return (
    <div className="App">
      {products.map((data) => (
        <Objects obj={data} key={data.value} />
      ))}
    </div>
  );
}

export default App;
