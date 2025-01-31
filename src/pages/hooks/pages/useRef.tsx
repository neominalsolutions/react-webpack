import React, { useRef } from 'react';

const CounterComponent = () => {
	// Neden State yerine useRef kullandık ?
	// Domda IntervalRef değerini kullanmayacağım için state olarak tutmayı gerekli bulmadık.
	// useRef kullanmayıp normal bir değişken yapsaydık, her render olduğunda değişkenin değeri sıfırlanacaktı.
	// Not: Renderlar arası  dağer kaybetmek istemeyip aynı zamanda arka planda ekran yazılacak değerler ile çalışmıyorsa useRef kullanılabilir.
	// useRef virtual dom ile alakalı değil, normal bir js değişkeni gibi çalışır.
	const IntervalRef = useRef<NodeJS.Timeout | null>(null);
	const [timer, setTimer] = React.useState(0);

	console.log('UseRef IntervalRef', IntervalRef);

	const startTimer = () => {
		IntervalRef.current = setInterval(() => {
			console.log('Timer is running');
			setTimer((timer) => timer + 1);
		}, 1000);
	};

	const stopTimer = () => {
		clearInterval(IntervalRef.current as NodeJS.Timeout);
	};

	return (
		<>
			Sayac: {timer}
			<button onClick={startTimer}>Start Timer Ref</button>
			<button onClick={stopTimer}>Stop Timer Ref</button>
			<hr></hr>
		</>
	);
};

const InputWithRefComponent = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	// useRef ile input elementine erişim sağladık. ve JS document.getElementById('input') gibi bir işlem yapmış olduk.

	console.log('...Rendering');

	const onInputChange = (e: any) => {
		console.log(e.target.value.length);
	};

	return (
		<>
			<input onChange={onInputChange} ref={inputRef} type="text" />
			<button
				onClick={() => {
					inputRef.current?.focus();
				}}
			>
				Focus
			</button>
			<button
				onClick={() => {
					if (inputRef.current) {
						inputRef.current.value = '';
					}
				}}
			>
				Clear
			</button>
		</>
	);
};

const InputWithStateComponent = () => {
	const [inputValue, setInputValue] = React.useState('');

	console.log('...Rendering');

	return (
		<>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button
				onClick={() => {
					const inputElement = document.querySelector('input');
					if (inputElement) {
						inputElement.focus();
					}
				}}
			>
				Focus
			</button>
			<button
				onClick={() => {
					setInputValue('');
				}}
			>
				Clear
			</button>
		</>
	);
};

function UseRef() {
	return (
		<>
			<h1>UseRef Wih Interval</h1>
			<CounterComponent />
			<hr></hr>
			<h1>Input UseRef</h1>
			<InputWithRefComponent />
			<hr></hr>
			<h1>Input With State</h1>
			<InputWithStateComponent />
		</>
	);
}

export default UseRef;
