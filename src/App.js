import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Header from './components/Header';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import Dictionary from './components/Dictionary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Header>
				<Routes>
					<Route path="/Employees" element={<Employees />} />
					<Route path="/Customers" element={<Customers />} />
					<Route path="/Dictionary" element={<Dictionary />} />
				</Routes>
			</Header>
		</BrowserRouter>
	);
};
export default App;
