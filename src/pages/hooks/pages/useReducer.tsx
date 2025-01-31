import React, { useReducer } from 'react';

type ThemeState = {
	isLight: boolean;
	isDark: boolean;
	isBlue: boolean;
	color?: string;
};

type ThemeAction = {
	type: 'LIGHT' | 'DARK' | 'BLUE' | 'CUSTOM';
	payload?: any;
};

const ThemeReducer = (state: ThemeState, action: ThemeAction) => {
	console.log('old state', state);
	console.log('action', action);

	switch (action.type) {
		case 'LIGHT':
			return {
				...state,
				isLight: true,
				isDark: false,
				isBlue: false,
				color: undefined,
			};
		case 'DARK':
			return {
				...state,
				isDark: true,
				isLight: false,
				isBlue: false,
				color: undefined,
			};
		case 'BLUE':
			return {
				...state,
				isBlue: true,
				isDark: false,
				isLight: false,
				color: undefined,
			};
		case 'CUSTOM':
			return {
				...state,
				color: action.payload,
				isDark: false,
				isLight: false,
				isBlue: false,
			};
		default:
			return state;
	}
};

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
