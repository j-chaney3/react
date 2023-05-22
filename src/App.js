import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [role, setRole] = useState('dev');
	const [employees, setEmployees] = useState([
		{
			name: 'Caleb',
			role: 'Developer',
			img: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg',
		},
		{
			name: 'Mariyah',
			role: 'Influencer',
			img: 'https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg',
		},
		{
			name: 'James',
			role: 'Trog',
			img: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg',
		},
		{
			name: 'Dylan',
			role: 'Painter',
			img: 'https://images.pexels.com/photos/989200/pexels-photo-989200.jpeg',
		},
		{
			name: 'Sam',
			role: 'Steel Detailer',
			img: 'https://images.pexels.com/photos/6934325/pexels-photo-6934325.png',
		},
		{
			name: 'Cody',
			role: 'Knob Doctor',
			img: 'https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg',
		},
	]);
	const showEmployees = true;

	return (
		<div>
			{showEmployees ? (
				<>
					<input
						type="text"
						onChange={(e) => {
							setRole(e.target.value);
						}}
					/>
					<div className="flex flex-wrap justify-center">
						{employees.map((employee) => {
							console.log(uuidv4());
							return (
								<Employee
									key={uuidv4()}
									name={employee.name}
									role={employee.role}
									img={employee.img}
								/>
							);
						})}
					</div>
				</>
			) : (
				<p>You can't see the employees</p>
			)}
		</div>
	);
}

export default App;
