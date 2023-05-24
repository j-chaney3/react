import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


const DefinitionSearch = () => {
	const [word, setWord] = useState('Word');
	const navigate = useNavigate();

	//use effect updates after state updates, limit what state useEffect cares aobut with dependency array. Define after state. No hoisting?
	// no dependecy: updates for any state change
	// empty dependecny array --> execute once
	// pasing in data --> only execute when state variables are changed
	//read about cleanup in react docs

	return (
		<form className='flex space-between spaxe-x-2 max-w-[300px]'
			onSubmit={() => {
				navigate('/dictionary/' + word);
			}}
		>
			<input
				className='shrink min-w-0 px-2 rounded py-1 mx-2'
				placeholder='Dinosaur'
				id="definition"
				type="text"
				onChange={(e) => {
					setWord(e.target.value);
				}}
			/>
			<button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded'>Search</button>
		</form>
	);
}

export default DefinitionSearch;