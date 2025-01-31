export type ThemeState = {
	isLight: boolean;
	isDark: boolean;
	isBlue: boolean;
	color?: string;
};

type ThemeAction = {
	type: 'LIGHT' | 'DARK' | 'BLUE' | 'CUSTOM';
	payload?: any;
};

export const ThemeReducer = (state: ThemeState, action: ThemeAction) => {
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
