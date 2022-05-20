import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Balance from './components/Balance';
import TotalExpenses from './components/TotalExpenses';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './context/AppContext';
import { Bank2} from 'react-bootstrap-icons';
import { Row} from 'react-bootstrap';

const App = () => {
	return (
		<AppProvider>
			<div className='container'>
				<h1 className='mt-3'><center><Bank2 /> PHinanz: A Financial Manager</center></h1>
				<div className='row mt-3'>
					<Row>
						<div className='col-sm'>
							<Budget />
						</div>
					</Row>
					<Row>
					<div className='col-sm'>
						<Balance />
					</div>
					<div className='col-sm'>
						<TotalExpenses />
					</div>
					</Row>
					
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<h3 className='mt-3'>Add Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
			</div>
		</AppProvider>		
	);
};

export default App;