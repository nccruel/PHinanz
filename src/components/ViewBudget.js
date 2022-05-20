import React from 'react';
import { Wallet} from 'react-bootstrap-icons';

const ViewBudget = (props) => {
	return (
		<>
			<span><Wallet /> <b>BUDGET:</b> ₱{props.budget}</span>
			<button type='button' className='btn btn-primary' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;
