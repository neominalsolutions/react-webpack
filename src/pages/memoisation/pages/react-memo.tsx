import React, { useState } from 'react';

function Parent() {
	console.log('Parent component rendered');
	// The Child component will re-render on every Parent render
	// because the Parent component is re-rendered on every state change.
	const [number, setNumber] = useState(0);
	const [title, setTitle] = useState('React Memo');
	const onClick = () => {
		setNumber(Math.random() * 100);
	};

	const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	return (
		<>
			{/* <Child title="React Memo" /> */}
			<MemoizedChild title={title} />
			<hr></hr>
			<p>Number: {number}</p>

			<button onClick={onClick}>Click</button>
			<hr></hr>
			<label>Title:</label>
			<input type="text" value={title} onChange={onTitleChange} />
		</>
	);
}

type ChildProps = {
	title?: string;
};

// Memoisation tanımı: Props değişimi olmadan componentin re-render edilmemweini sağlar.
function Child({ title }: ChildProps) {
	console.log('Child component rendered');
	return <>Child: {title}</>;
}

// React.memo() is a higher order component that memoizes the component.
const MemoizedChild = React.memo(Child);

function ReactMemo() {
	return (
		<>
			<Parent />
		</>
	);
}

export default ReactMemo;
