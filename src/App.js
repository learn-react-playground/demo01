import React, { useState } from 'react';
import { Button } from 'antd';
import './App.css';

const ButtonGroup = Button.Group;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <p>计数器数值：{count}</p>
        <ButtonGroup>
          <Button type="primary" onClick={() => setCount(count + 1)}>计数器 +1</Button>
          <Button type="primary" onClick={() => setCount(count - 1)}>计数器 -1</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default App;
