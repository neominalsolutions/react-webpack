import React, { useReducer } from 'react';
import { ThemeReducer, ThemeState } from '../reducers/theme.reducer';

function UseReducer() {
	const [state, dispatch] = useReducer(ThemeReducer, {
		isDark: true,
		isLight: false,
		isBlue: false,
	} as ThemeState);

	const colors = [
		'red',
		'green',
		'blue',
		'yellow',
		'purple',
		'orange',
		'pink',
		'brown',
		'black',
		'white',
	];

	return (
		<>
			<button onClick={() => dispatch({ type: 'LIGHT' })}>Light Theme</button>
			<button onClick={() => dispatch({ type: 'DARK' })}>Dark Theme</button>
			<button onClick={() => dispatch({ type: 'BLUE' })}>Blue Theme</button>
			<button
				onClick={() =>
					dispatch({
						type: 'CUSTOM',
						payload: colors[Math.floor(Math.random() * colors.length)],
					})
				}
			>
				Custom Theme
			</button>

			{state.isDark && <div>Dark Theme</div>}
			{state.isLight && <div>Light Theme</div>}
			{state.isBlue && <div>Blue Theme</div>}
			{state.color && <div style={{ color: state.color }}>Custom Theme</div>}
		</>
	);
}

export default UseReducer;
