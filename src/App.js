import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Balance from './components/Balance';
import TotalExpenses from './components/TotalExpenses';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './context/AppContext';
import { CashCoin } from 'react-bootstrap-icons';
import { Row } from 'react-bootstrap';

const App = () => {
	const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
	const handleCloseAddExpenseModal = () => setShowAddExpenseModal(false);
	const handleShowAddExpenseModal = () => setShowAddExpenseModal(true);

	return (
		<AppProvider>
			<div className='container'>
				<h1 className='mt-3'><center><CashCoin /> PHinanz: A Financial Manager <CashCoin /></center></h1>
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
				<h3 className='mt-3'>EXPENSES
					{' '}
					<button type='button' className='btn btn-primary' onClick={handleShowAddExpenseModal}>
						Add New Expense
					</button>
				</h3>
					
				<div className='row mt-3'>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>

				<AddExpenseForm showAddExpenseModal={showAddExpenseModal}
					handleCloseAddExpenseModal={handleCloseAddExpenseModal}
				/>
			</div>
		</AppProvider>		
	);
};

export default App;