import { Greating } from "./Greating";

function App() {
  return (
    <div className="App">
      <input
        type="checkbox"
        onChange={function () {
          console.log("you clicked");
        }}
      />
      <Greating
        firstName={"sumit"}
        lastName={"gond"}
        age={23}
        car={{ brand: "Viper", color: "Red", speed: 200 }}
        doSomething={function () {
          console.log("sumitgond");
        }}
      >
        image={<img src="https://picsum.photos/200/300" alt="photos" />}
      </Greating>
    </div>
  );
}

export default App;
