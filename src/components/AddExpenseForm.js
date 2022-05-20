import React, { useContext, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = ({ showAddExpenseModal, handleCloseAddExpenseModal}) => {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const handleClose = () => {
		setName('');
		setCost('');
        handleCloseAddExpenseModal();
    };

	const onSubmit = (event) => {
		event.preventDefault();

		const expense = {
			id: uuidv4(),
			name: name,
			cost: parseInt(cost),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

		handleClose();
	};

	return (
        <Modal show={showAddExpenseModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit}>
					<div className='row'>
						<div className='col-sm'>
							<label for='name'>Name</label>
							<input
								required='required'
								type='text'
								className='form-control'
								id='name'
								value={name}
								onChange={(event) => setName(event.target.value)}
							></input>
						</div>
						<div className='col-sm'>
							<label for='cost'>Cost</label>
							<input
								required='required'
								type='text'
								className='form-control'
								id='cost'
								value={cost}
								onChange={(event) => setCost(event.target.value)}
							></input>
						</div>
						<div className='col-sm'>
							<button type='submit' className='btn btn-primary mt-3'>
								Save
							</button>
						</div>
					</div>
            	</Form>
            </Modal.Body>
        </Modal>
    )

};

export default AddExpenseForm;