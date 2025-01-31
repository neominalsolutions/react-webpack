import React, { useCallback, useMemo, useState } from 'react';

// Not 1: items: string[] javascript de diziler ref type olduğundan dolayı useMemo ile memoization yapmak zorunda kaldık. Yoksa her seferinde yeni bir referans oluşturulduğu için ParentComponent her seferinde render alacaktı.

// Not 2: onSelect Props'da ise javascipt fonksiyonları referans type olduğundan dolayı useCallback ile memoization yapmak zorunda kaldık. Yoksa her seferinde yeni bir referans oluşturulduğu için ParentComponent her seferinde render alacaktı.

// Not 3: items dizi dışında {} object tipinde olsaydı useMemo kullanmamız gerekecekti. Çünkü object tipleri referans type olduğundan  ParentComponent her seferinde render alacaktı.

type Props = {
	items: string[];
	onSelect: (id: number) => void;
};

function ParentComponent({ items, onSelect }: Props) {
	console.log('ParentComponent render');

	const onButtonSelect = (id: number) => {
		onSelect(id);
	};

	return (
		<>
			{' '}
			<h1>Parent Component</h1>
			{items.map((item: string, index: number) => (
				<div key={index}>
					<p>{item}</p>
					<button onClick={() => onButtonSelect(index)}>Seç</button>
				</div>
			))}
		</>
	);
}

const MemoizedParentComponent = React.memo(ParentComponent);

function UseCallback() {
	const [count, setCount] = React.useState(0);

	const [items, setItems] = useState<string[]>(['item1', 'item2', 'item3']);

	return (
		<>
			<MemoizedParentComponent
				items={useMemo(() => items, [items])}
				onSelect={useCallback((id) => console.log(id), [])}
			/>
			{/* <ParentComponent items={items} onSelect={(id) => console.log(id)} /> */}
			<hr></hr>
			<h1>Page Component</h1>
			<p>Sayac: {count}</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Yenile
			</button>
			<button
				onClick={() => {
					setItems([...items, 'item' + (items.length + 1)]);
				}}
			>
				Item Change
			</button>
		</>
	);
}

export default UseCallback;
