import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button
        className="btn btn-lg btn-primary m-2 p-3"
        onClick={() => dispatch(increment(2))}
      >
        +
      </button>
      <button
        className="btn btn-lg btn-primary m-2 p-3"
        onClick={() => dispatch(decrement(2))}
      >
        -
      </button>

      {login ? (
        <h3>valuable informtion you shoudnt see</h3>
      ) : (
        <h3>Using redux for another kind of information</h3>
      )}
    </div>
  );
};

export default App;
