import { useState } from "react";
import "./App.css"; // make sure CSS is imported

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
