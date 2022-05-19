import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const TotalExpenses = () => {
	const { expenses } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div className='alert alert-primary'>
			<span>Expenses: ₱{totalExpenses}</span>
		</div>
	);
};

export default TotalExpenses;