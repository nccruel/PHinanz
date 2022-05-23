import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Wallet2} from 'react-bootstrap-icons';

const TotalIncome = () => {
	const { income } = useContext(AppContext);

	const totalIncome = income.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div className='alert alert-warning p-3 d-flex align-items-center justify-content-between'>
			<h5><Wallet2 /> <b>INCOME:</b> ₱{totalIncome}</h5>
		</div>
	);
};

export default TotalIncome;