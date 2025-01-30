import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.scss';
import lionPng from './assets/lion.jpg';

// ana component
const App = () => {
	return (
		<div>
			<h1 className="test">Hello Webpack</h1>
			<img src={lionPng} alt="placeholder" />
			<p>Deneme</p>
		</div>
	);
};

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

// div id'si root olan elemente App componentini render et
root.render(<App />);
