import { AgeCounter } from "./AgeCounter";
import Car from "./callBackFunction/Car";

function App() {
  function hello(value) {
    alert("Hello from <App/>" + value);
  }
  return (
    <div className="App">
      {/* <AgeCounter /> */}
      <p>I am the {"<App/>"}</p>
      <Car onCarClick={hello} />
    </div>
  );
}

export default App;
