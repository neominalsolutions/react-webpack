import React from 'react';
import ReactDOM from 'react-dom/client';

// ana component
const App = () => {
	return (
		<div>
			<h1>Hello Webpack</h1>
		</div>
	);
};

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

// div id'si root olan elemente App componentini render et
root.render(<App />);
