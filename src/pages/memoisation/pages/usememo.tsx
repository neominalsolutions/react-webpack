import React, { useEffect } from 'react';

function UseMemo() {
	// state değiştiğinde acaba expensiveFunction tekrar çalışacak mı?
	const [visible, setVisible] = React.useState(true);
	const [number, setNumber] = React.useState(1);

	// useEffect: DOM güncellendiğinde çalışır (componentDidUpdate) visible değiştiğinde çalışır
	useEffect(() => {
		console.log('useEffect is called');
		console.log('DOM is updated');
		// her visible değişiminde number 1 artır.
		// setNumber(number + 1);
	}, [visible]);

	// maliyetli bir fonksiyon
	// yoğun matematiksel hesaplamalar
	const expensiveFunction = (nm: number) => {
		console.log('expensiveFunction is called');
		return nm * number;
	};

	// const unmemoizedValue = expensiveFunction(5);
	// []: sadece bir kere çalışır
	// [number] : number değiştiğinde çalışır
	const memoizedValue = React.useMemo(() => expensiveFunction(5), [number]);
	return (
		<>
			{visible && (
				<>
					<p>Hesaplanmış Değer: {memoizedValue}</p>
				</>
			)}
			<hr />
			<button onClick={() => setVisible(!visible)}>Toggle</button>
		</>
	);
}

export default UseMemo;
