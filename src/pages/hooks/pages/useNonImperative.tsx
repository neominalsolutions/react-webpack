import React from 'react';

// DialogProps is a type that defines the props of the Dialog component
type DialogProps = {
	visible: boolean;
	onVisibleChange: (visible: boolean) => void;
	onRefresh: (country: string) => void;
};

function Dialog({ visible, onVisibleChange, onRefresh }: DialogProps) {
	return (
		<>
			{visible && <div>Dialog</div>}
			<button onClick={() => onVisibleChange(true)}>Show</button>
			<button onClick={() => onVisibleChange(false)}>Hide</button>
			<select onChange={(e) => onRefresh(e.target.value)}>
				<option value="tr">Türkiye</option>
				<option value="us">Amerika</option>
			</select>
		</>
	);
}

function useNonImperative() {
	const [visible, setVisible] = React.useState(true);

	const handleVisibleChange = (newVisible: boolean) => {
		setVisible(newVisible);
	};

	const handleRefresh = (country: string) => {
		console.log('refresh', country);
	};

	return (
		<Dialog
			visible={visible}
			onVisibleChange={handleVisibleChange}
			onRefresh={handleRefresh}
		/>
	);
}

export default useNonImperative;
