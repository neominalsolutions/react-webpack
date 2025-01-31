import React, { useState } from 'react';

function Parent() {
	// The Child component will re-render on every Parent render
	// because the Parent component is re-rendered on every state change.
	const [number, setNumber] = useState(0);
	const onClick = () => {
		setNumber(Math.random() * 100);
	};

	return (
		<>
			<Child title="React Memo" />
			<hr></hr>
			<p>Number: {number}</p>
			<button onClick={onClick}>Click</button>
		</>
	);
}

type ChildProps = {
	title?: string;
};

function Child({ title }: ChildProps) {
	console.log('Child component rendered');
	return <>Child: {title}</>;
}

function ReactMemo() {
	return (
		<>
			<Parent />
		</>
	);
}

export default ReactMemo;
