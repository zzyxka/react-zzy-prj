// App.jsx
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from 'shineout';
import c from './App.less';

function App() {
  const [clickCount, setClickCount] = useState(0);
  return (
    <div className={c.container}>
      <h1>Hello React!</h1>
      <p>
        <span>click count: </span>
        {clickCount}
      </p>
      <Button
        className={c.buttonWave}
        onClick={() => setClickCount(clickCount + 1)}
      >
        click me
      </Button>
    </div>
  );
}

export default () => {
  const root = createRoot(document.querySelector('#container'));
  root.render(<App />);
};
