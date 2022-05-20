import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { PiggyBank} from 'react-bootstrap-icons';

const Balance = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);
	
	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div className={`alert ${alertType}`}>
			<span><PiggyBank /> <b>Balance:</b> ₱{budget - totalExpenses}</span>
		</div>
	);
};

export default Balance;