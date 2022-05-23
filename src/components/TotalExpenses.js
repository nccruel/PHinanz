import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Wallet2} from 'react-bootstrap-icons';

const TotalExpenses = () => {
	const { expenses } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div className='alert alert-primary'>
			<h5><Wallet2 /> <b>EXPENSES:</b> ₱{totalExpenses}</h5>
		</div>
	);
};

export default TotalExpenses;