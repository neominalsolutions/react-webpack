import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './index.css';

function Hooks() {
	return (
		<>
			<NavLink
				className={({ isActive }) => (isActive ? 'active-link' : '')}
				to="useRef"
			>
				Use Ref
			</NavLink>{' '}
			<NavLink
				className={({ isActive }) => (isActive ? 'active-link' : '')}
				to="useImperative"
			>
				Use Imperative
			</NavLink>{' '}
			{''}
			<NavLink
				className={({ isActive }) => (isActive ? 'active-link' : '')}
				to="useNonImperative"
			>
				Use NonImperative
			</NavLink>{' '}
			{''}
			<NavLink
				className={({ isActive }) => (isActive ? 'active-link' : '')}
				to="useReducer"
			>
				Use Reducer
			</NavLink>{' '}
			<div style={{ padding: '20px' }}>
				<Outlet />
			</div>
		</>
	);
}

export default Hooks;
