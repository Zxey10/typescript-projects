import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  changeValue,
} from "../redux/slices/counterSlice";
import { RootState } from "../redux/store";

const Counter = () => {
  const dispatch = useDispatch();
  const { value, incrementAmount } = useSelector(
    (state: RootState) => state.counter
  );

  const handleCounterInput = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(changeValue(Number(e.currentTarget.value)));
  };

  return (
    <Fragment>
      <div>{value}</div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <input type="number" onChange={handleCounterInput} />
      <h1>Increment by {incrementAmount}</h1>
    </Fragment>
  );
};

export default Counter;
