import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams, useNavigate, Link } from 'react-router-dom';
import NotFound from '../components/NotFound';

const Definition = () => {
	const [word, setWord] = useState([]);
	const [notFound, setNotFound] = useState(false);
	let { search } = useParams();
	const navigate = useNavigate();

	//on first page load, fetches data from API
	useEffect(() => {
		fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
			.then((response) => {
				if (response.status === 404) {
					setNotFound(true);
				}

				return response.json();
			})
			.then((data) => {
				setWord(data[0].meanings);
			})
			.catch((error) => {
				console.error('Error fetching definition:', error);
			});
	}, []);

	if (notFound === true) {
		return (
			<>
				<NotFound />
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
				</>
			) : null}
		</>
	);
};

export default Definition;
