import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dictionary = () => {
	const [word, setWord] = useState('Word'); 
	const navigate = useNavigate();

    //use effect updates after state updates, limit what state useEffect cares aobut with dependency array. Define after state. No hoisting?
    // no dependecy: updates for any state change
    // empty dependecny array --> execute once
    // pasing in data --> only execute when state variables are changed
    //read about cleanup in react docs

	return (
		<>
			<input
				id='definition'
				type="text"
				onChange={(e) => {
					setWord(e.target.value);
                    
				}}
			/>
			<button onClick={()=> {
				navigate('/definition/'+word)
			}}>Search</button>
			
            
		</>
	);
};

export default Dictionary;
