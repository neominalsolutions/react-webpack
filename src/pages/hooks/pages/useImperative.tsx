import React, { ForwardedRef, useImperativeHandle } from 'react';

// DialogProps is a type that defines the props of the Dialog component
type DialogProps = {
	visible: boolean;
};

// DialogHandle is a type that defines the methods that the parent component can call on the child component
type DialogHandle = {
	visible(): void;
	hidden(): void;
	refresh(country: string): void;
};

function Dialog(
	{ visible }: DialogProps,
	forwadedRef: ForwardedRef<DialogHandle>
) {
	// encapsulate the visible state in the Dialog component
	const [visibleState, setVisibleState] = React.useState(visible);

	useImperativeHandle(
		forwadedRef,
		() => ({
			visible: () => setVisibleState(true),
			hidden: () => setVisibleState(false),
			refresh: (country: string) => {
				console.log('refresh', country);
			},
		}),
		[visible]
	);

	return <>{visibleState && <div>Dialog</div>}</>;
}

// forwardRef is a function that creates a new component that forwards the ref to the child component
const ForwadedDialog = React.forwardRef(Dialog);

function useImperative() {
	// Not: Parent Component  Child Component referansı üzerinden erişilebilir. Child Component API methodları üzerinden Child Component State değiştirdik.
	const dialogRef = React.useRef<DialogHandle>(null);

	return (
		<>
			<ForwadedDialog visible={true} ref={dialogRef} />

			<hr></hr>

			<select onChange={(e) => dialogRef.current?.refresh(e.target.value)}>
				<option value="tr">Türkiye</option>
				<option value="us">Amerika</option>
			</select>

			<button onClick={() => dialogRef.current?.visible()}>Show</button>
			<button onClick={() => dialogRef.current?.hidden()}>Hide</button>
		</>
	);
}

export default useImperative;
