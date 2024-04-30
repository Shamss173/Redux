import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, incNumberByValue } from "./actions/index";

function App() {
  const mystate = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  // const handleClick = () => {
  //   // Prompt the user for input
  //   const value = prompt("Enter a value:");
  //   // Check if the user entered a value
  //   if (value !== null) {
  //     // Convert the value to a number and dispatch the action
  //     dispatch(incNumberByValue(parseInt(value, 10)));
  //   }
  // };
  return (
    <>
      <div>
        <h1>Incremenet/Decrement</h1>
        <h4>using React and Redux</h4>
      </div>
      <div>
        <button onClick={() => dispatch(decNumber())}>Decrement</button>

        <p>value: " {mystate} "</p>
        <button onClick={() => dispatch(incNumber())}>Increment</button>
        <button onClick={dispatch(incNumberByValue(6))}>
          IncrementByValue
        </button>
      </div>
    </>
  );
}

export default App;
