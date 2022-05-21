import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { PiggyBank} from 'react-bootstrap-icons';

const Balance = () => {
	const { expenses, income } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);

	const totalIncome = income.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);
	
	var alertType;

	if (totalIncome === totalExpenses){
		alertType = 'alert-dark';
	}

	else if (totalExpenses > totalIncome){
		alertType = 'alert-danger';
	}

	else{
		alertType = 'alert-success';
	}
	

	return (
		<div className={`alert ${alertType}`}>
			<span><PiggyBank /> <b>BALANCE:</b> ₱{totalIncome - totalExpenses}</span>
		</div>
	);
};

export default Balance;