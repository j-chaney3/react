import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [role, setRole] = useState('dev');
	const [employees, setEmployees] = useState([
		{
			id: 1,
			name: 'Caleb',
			role: 'Developer',
			img: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg',
		},
		{	
			id: 2,
			name: 'Mariyah',
			role: 'Influencer',
			img: 'https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg',
		},
		{	
			id: 3,
			name: 'James',
			role: 'Trog',
			img: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg',
		},
		{	
			id: 4,
			name: 'Dylan',
			role: 'Painter',
			img: 'https://images.pexels.com/photos/989200/pexels-photo-989200.jpeg',
		},
		{	
			id: 5,
			name: 'Sam',
			role: 'Steel Detailer',
			img: 'https://images.pexels.com/photos/6934325/pexels-photo-6934325.png',
		},
		{	
			id: 6,
			name: 'Cody',
			role: 'Knob Doctor',
			img: 'https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg',
		},
	]);

	const editEmployee = (id, newName, newRole) => {
		const updatedEmployees = employees.map((employee) => {
			if(id === employee.id) {
				return {...employee, name: newName, role: newRole}
			} 
			return employee
		});
		setEmployees(updatedEmployees);

	}
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
							
							return (
								<Employee
									key={employee.id}
									id={employee.id}
									name={employee.name}
									role={employee.role}
									img={employee.img}
									editEmployee={editEmployee}
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
