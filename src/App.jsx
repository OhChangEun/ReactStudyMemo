import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  return { value, onChange };
};

const App = () => {
  // const [item, setItem] = useState(1);
  // const incrementItem = () => setItem(item + 1);
  // const decrementItem = () => setItem(item - 1);

  const name = useInput("Mr.");

  return (
    <>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
      {/* <input placeholder="Name" value={name.value} /> */}
      {/* <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>decrement</button> */}
    </>
  );
};

export default App;
