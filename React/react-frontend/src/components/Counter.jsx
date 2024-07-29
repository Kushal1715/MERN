import { useEffect, useState } from "react";

// const [value,setValue] = useState(initialValue);

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <div>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="btn btn-primary" onClick={() => setCount2(count2 + 2)}>
        Add 2
      </button>
      <h1>{count}</h1>
      <h2>{count2}</h2>
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
