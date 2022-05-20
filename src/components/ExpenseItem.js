import React, { useState, useContext } from 'react';
import {Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import DeleteExpenseForm from './DeleteExpenseForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const [showDeleteExpenseModal, setShowDeleteExpenseModal] = useState(false);
	const handleCloseDeleteExpenseModal = () => setShowDeleteExpenseModal(false);
	const handleShowDeleteExpenseModal = () => setShowDeleteExpenseModal(true);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<>
			<li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div className='alert alert-primary'>
				<b> ₱{props.cost}</b>
			</div>

			<Button variant="danger" size="sm" onClick={handleShowDeleteExpenseModal}>Delete</Button>
		</li>
		<DeleteExpenseForm
			showDeleteExpenseModal={showDeleteExpenseModal}
			handleCloseDeleteExpenseModal={handleCloseDeleteExpenseModal}
			handleDeleteExpense={handleDeleteExpense}
			name={props.name}
			cost={props.cost}/>		
		</>
		
	);
};

export default ExpenseItem;