import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
	const [role, setRole] = useState('dev');
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
						<Employee name="Caleb" role="Instructor" img='https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg' />
						<Employee name="Abby" role={role} img='https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg'/>
						<Employee name="John"  img='https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg'/>
						<Employee name="Caleb" role="Instructor"img='https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg' />
						<Employee name="Abby" role={role} img='https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg'/>
						<Employee name="John" img='https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg'/>
						<Employee name="Caleb" role="Instructor" img='https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg' />
						<Employee name="Abby" role={role} img='https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg'/>
						<Employee name="John"  img='https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg'/>
						<Employee name="Caleb" role="Instructor"img='https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg' />
						<Employee name="Abby" role={role} img='https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg'/>
						<Employee name="John" img='https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg'/>
					</div>
				</>
			) : (
				<p>You can't see the employees</p>
			)}
		</div>
	);
}

export default App;
