import { useSelector, useDispatch } from "react-redux";
import { DecrementCounterAction, IncrementCounterAction, ResetCounterAction } from "../store/actions/actions-count";
import { RootState } from "../store/configureStore";
import PublicButton from "./button";

export default function CounterApp() {
  const count = useSelector((state: RootState)=> state.counter_component.count);
  const dispatch = useDispatch();

  const increment = () => dispatch(IncrementCounterAction());
  const decrement = () => dispatch(DecrementCounterAction());
  const reset = () => dispatch(ResetCounterAction());

  return (
    <div className="Counter-App">
      <h1>
        <input type="number" disabled value={count} className="input" />
      </h1>
      <div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
        <PublicButton color="success" firstClassName="incrementBtn" onClick={increment} description="+"/>
        <PublicButton color="warning" firstClassName="decrementBtn" onClick={decrement} description="-"/>
      </div>
      <div>
        <PublicButton firstClassName="resetBtn" onClick={reset} description="Reset"/>
      </div>
    </div>
  );
}

