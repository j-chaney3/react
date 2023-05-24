import { useState, useEffect } from 'react';

const Dictionary = () => {
	const [word, setWord] = useState('Word');

    //use effect updates after state updates, limit what state useEffect cares aobut with dependency array. Define after state. No hoisting?
	useEffect(() => {
		console.log('state updated: ', word);
	},[word]);

	return (
		<>
			<input
				type="text"
				onChange={(e) => {
					setWord(e.target.value);
                    
				}}
			/>
			<h1 className="text-red">
				Let's get the definition for:{' '}
				<span className="text-red-300">{word}</span>{' '}
			</h1>
		</>
	);
};

export default Dictionary;
