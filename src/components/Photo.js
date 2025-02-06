import { useState, useCallback, memo } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    alert(`Current count: ${count}`);
  }, [count]); // The function updates when `count` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <HeavyComponent handleClick={handleClick} />
    </div>
  );
}

const HeavyComponent = memo(function ({ handleClick }) {
  return (
    <>
      <button onClick={handleClick}>Show Count</button>
    </>
  );
});
