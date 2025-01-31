import { useReducer } from "react";

const initialState = {
  age: 18,
  title: "Interstellar",
  groceries: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "updateAllState":
      return {
        ...state,
        age: action.payload,
        title: "Hobbit",
        groceries: ["item1", "item2"],
      };
    default:
      throw new Error("unknown action");
  }
}

function Component() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button
        onClick={() => dispatch({ type: "updateAllState", payload: 45 })}
      />
      <p>Marc is {state.age} years old</p>
      <p>Marc is reading {state.title}</p>
      <div>
        <p>Marc needs to buy:</p>
        {state.groceries.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </>
  );
}
