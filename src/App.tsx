import Counter from "./components/Counter";
import "./App.css";
import { useCountStore } from "./store/counterStore";
import { useCountStoreTwo } from "./store/counterStoreTwo";
function App() {
  return (
    <center>
      <div>
        <Counter store={useCountStore} />
        <Counter store={useCountStoreTwo} />
      </div>
    </center>
  );
}

export default App;

