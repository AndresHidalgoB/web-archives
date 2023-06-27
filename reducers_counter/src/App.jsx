import { useReducer } from "react";

const initialState = { counter: 0 , id:  null};

const TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { counter: state.counter + 1};
    case TYPES.DECREMENT:
      return { counter: state.counter - 1};
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const restar = () => dispatch({ type: TYPES.DECREMENT });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter</h1>
      <nav>
        <button onClick={() => sumar()}>+1</button>
        <button onClick={() => restar()}>-1</button>
      </nav>
      <span>{state.counter}</span>
    </div>
  );
}

export default App;
