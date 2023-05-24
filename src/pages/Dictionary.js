import { useState, useEffect } from 'react';

const Dictionary = () => {
	const [word, setWord] = useState('Word');
    const [word2, setWord2] = useState('');

    //use effect updates after state updates, limit what state useEffect cares aobut with dependency array. Define after state. No hoisting?
	useEffect(() => {
		console.log('state updated: ' + word);
	},[word]);
    useEffect(() => {
		console.log('state updated: ' + word2);
	},[word2]);
    // no dependecy: updates for any state change
    // empty dependecny array --> execute once
    // pasing in data --> only execute when state variables are changed
    //read about cleanup in react docs

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
            <input
				type="text"
				onChange={(e) => {
					setWord2(e.target.value);
                    
				}}
			/>
			<h2 className="text-red">
				Let's get the definition for:{' '}
				<span className="text-blue-300">{word2}</span>{' '}
			</h2>
		</>
	);
};

export default Dictionary;
