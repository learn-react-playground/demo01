import React, { useState } from 'react';
import { Button, Icon } from 'antd';
import './App.css';

const ButtonGroup = Button.Group;

function App() {
  const [count, setCount] = useState(0);
  const step = 1;

  return (
    <div className="App">
      <div>
        <p>计数器数值：{count}</p>
        <ButtonGroup>
          <Button type="danger" onClick={() => setCount(count - step)}><Icon type="minus-circle" />计数器 -{`${step}`}</Button>
          <Button type="primary" onClick={() => setCount(count + step)}><Icon type="plus-circle" />计数器 +{`${step}`}</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default App;
