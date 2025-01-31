import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Memoisation.module.css';

function Memoisation() {
	return (
		<>
			<NavLink
				className={(isActive) => (isActive ? styles['active-link'] : '')}
				to="memoisation/react-memo"
			>
				React Memo
			</NavLink>{' '}
			<NavLink
				className={(isActive) => (isActive ? styles['active-link'] : '')}
				to="memoisation/useMemo"
			>
				UseMemo Hook
			</NavLink>{' '}
			{''}
			<NavLink
				className={(isActive) => (isActive ? styles['active-link'] : '')}
				to="memoisation/useCallback"
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
