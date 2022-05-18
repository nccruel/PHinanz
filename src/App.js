import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Balance from './components/Balance';
import TotalExpenses from './components/TotalExpenses';

const App = () => {
	return (
			<div className='container'>
				<h1 className='mt-3'>My Budget Planner</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<Balance />
					</div>
					<div className='col-sm'>
						<TotalExpenses />
					</div>
				</div>
			</div>
	);
};

export default App;