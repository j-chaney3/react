import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams, useNavigate, Link } from 'react-router-dom';
import NotFound from '../components/NotFound';
import DefinitionSearch from '../components/DefinitionSearch';

const Definition = () => {
	const [word, setWord] = useState([]);
	const [notFound, setNotFound] = useState(false);
	const [error, setError] = useState(false);
	let { search } = useParams();
	const navigate = useNavigate();

	//on first page load, fetches data from API
	useEffect(() => {
		//const url = 'https://adjklfadfjakldjkslfsljfdsi32.com'
		//const url ='https://httpstat.us/501';
		const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search;

		fetch(url)
			.then((response) => {
				if (response.status === 404) {
					setNotFound(true);
				} else if (response.status === 401) {
					navigate('/login');
				} else if (response.status === 500) {
					setError(true);
				}
				if (!response.ok) {
					setError(true);

					throw new Error('Something went wrong');
				}
				return response.json();
			})
			.then((data) => {
				setWord(data[0].meanings);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, []);

	if (notFound === true) {
		return (
			<>
				<NotFound />
				<Link to="/dictionary">
					<button>Try another word</button>
				</Link>
			</>
		);
	}
	if (error === true) {
		return (
			<>
				<p>Something went wrong, try again?</p>
				<Link to="/dictionary">
					<button>Search another word</button>
				</Link>
			</>
		);
	}
	return (
		<>
			{word ? (
				<>
					<h1>Here is a definition:</h1>

					{word.map((meaning) => {
						return (
							<p key={uuidv4()}>
								{meaning.partOfSpeech + ': '}
								{meaning.definitions[0].definition}
							</p>
						);
					})}
					<p>Search again: </p>
					<DefinitionSearch/>
				</>
			) : null}
			
		</>
	);
};

export default Definition;
