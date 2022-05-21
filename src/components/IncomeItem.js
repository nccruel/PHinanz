import React, { useState, useContext } from 'react';
import {Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import DeleteIncomeForm from './DeleteIncomeForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const IncomeItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const [showDeleteIncomeModal, setShowDeleteIncomeModal] = useState(false);
	const handleCloseDeleteIncomeModal = () => setShowDeleteIncomeModal(false);
	const handleShowDeleteIncomeModal = () => setShowDeleteIncomeModal(true);

	const handleDeleteIncome = () => {
		dispatch({
			type: 'DELETE_INCOME',
			payload: props.id,
		});
	};

	return (
		<>
			<li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div className='alert alert-warning'>
				<b> ₱{props.cost}</b>
			</div>

			<Button variant="danger" size="sm" onClick={handleShowDeleteIncomeModal}>Delete</Button>
		</li>
		<DeleteIncomeForm
			showDeleteIncomeModal={showDeleteIncomeModal}
			handleCloseDeleteIncomeModal={handleCloseDeleteIncomeModal}
			handleDeleteIncome={handleDeleteIncome}
			name={props.name}
			cost={props.cost}/>		
		</>
		
	);
};

export default IncomeItem;