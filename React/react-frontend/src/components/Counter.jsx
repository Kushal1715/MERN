import React, { useState } from "react";

// const [value,setValue] = useState(initialValue);

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        +
      </button>
      <h1>{count}</h1>
      {/* //JSX curly */}
      {count > 0 && (
        <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
          -
        </button>
      )}
    </div>
  );
};

export default Counter;
