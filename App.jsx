// App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import c from './App.css';
import { Button } from 'shineout';

const App = () => (
	<div>
		<h1 className={c.h1}>Hello React!</h1>
		<Button className={c.buttonWave}>click me</Button>
	</div>
);

export default () => {
	const root = createRoot(document.querySelector('#container'));
	root.render(<App />);
};
