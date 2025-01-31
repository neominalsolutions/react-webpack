import React, { useRef } from 'react';

function UseRef() {
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
}

export default UseRef;
