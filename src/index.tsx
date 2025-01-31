import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.scss';
import lionPng from './assets/lion.jpg';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Memoisation from './pages/memoisation';
import ReactMemo from './pages/memoisation/pages/react-memo';
import UseMemo from './pages/memoisation/pages/usememo';
import UseCallback from './pages/memoisation/pages/usecallback';
import Hooks from './pages/hooks';
import UseRef from './pages/hooks/pages/useRef';
import useImperative from './pages/hooks/pages/useImperative';
import UseReducer from './pages/hooks/pages/useReducer';

// ana component
const App = () => {
	return (
		<div>
			<h1 className="test">Hello Webpack</h1>
			<img src={lionPng} alt="placeholder" />
			<p>Deneme</p>
			<Link to="/memoisation">Memoisation</Link> {' '}
			<Link to="/hooks">Hooks</Link>
		</div>
	);
};

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		path: '/',
		Component: App,
	},
	{
		path: '/memoisation',
		Component: Memoisation,
		children: [
			{
				path: 'react-memo',
				Component: ReactMemo,
			},
			{
				path: 'useMemo',
				Component: UseMemo,
			},
			{
				path: 'useCallback',
				Component: UseCallback,
			},
		],
	},
	{
		path: '/hooks',
		Component: Hooks,
		children: [
			{
				path: 'useRef',
				Component: UseRef,
			},
			{
				path: 'useImperative',
				Component: useImperative,
			},
			{
				path: 'useReducer',
				Component: UseReducer,
			},
		],
	},
]);

// div id'si root olan elemente App componentini render et
root.render(<RouterProvider router={router} />);
