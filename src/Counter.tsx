import React from 'react';
import counter from './store/counter';

function Counter() {
  return (
    <div className="App">
        <p>Count = {counter.count}</p>
        <button onClick={() => counter.increment()}>+</button>
        <button onClick={() => counter.decrement()}>-</button>
    </div>
  );
}

export default Counter;