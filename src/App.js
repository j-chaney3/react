import './App.css';
import Employee from './components/Employee';

function App() {
	
	const showEmployees = true;
	return (
		<div className="App">
			{showEmployees ? (
				<>
					<Employee name={'Caleb'} role={'Instructor'}/>
					<Employee name='Abby' />
					<Employee name='John' />
				</>
			) : (
				<p>You can't see the employees</p>
			)}
		</div>
	);
}

export default App;
