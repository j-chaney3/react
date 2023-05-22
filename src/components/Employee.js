const Employee = (props) => {
	return (
		<>
			<h3>Employee {props.name}</h3>

			{props.role ? <h4>{props.role}</h4> : <h4>No Role</h4>}
		</>
	);
};

export default Employee;
