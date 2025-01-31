import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './index.css';

function Memoisation() {
	return (
		<>
			<NavLink
				className={({ isActive }) => (isActive ? 'active-link' : '')}
				to="react-memo"
			>
				React Memo
			</NavLink>{' '}
			<NavLink
				className={({ isActive }) => (isActive ? 'active-link' : '')}
				to="useMemo"
			>
				UseMemo Hook
			</NavLink>{' '}
			{''}
			<NavLink
				className={({ isActive }) => (isActive ? 'active-link' : '')}
				to="useCallback"
			>
				UseCallback Hook
			</NavLink>{' '}
			<div style={{ padding: '20px' }}>
				<Outlet />
			</div>
		</>
	);
}

export default Memoisation;
