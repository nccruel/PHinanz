import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Balance from './components/Balance';
import TotalExpenses from './components/TotalExpenses';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import TotalIncome from './components/TotalIncome';
import IncomeList from './components/IncomeList';
import AddIncomeForm from './components/AddIncomeForm';
import { AppProvider } from './context/AppContext';
import { CashCoin } from 'react-bootstrap-icons';
import { Row } from 'react-bootstrap';

const App = () => {
	const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
	const handleCloseAddExpenseModal = () => setShowAddExpenseModal(false);
	const handleShowAddExpenseModal = () => setShowAddExpenseModal(true);

	const [showAddIncomeModal, setShowAddIncomeModal] = useState(false);
	const handleCloseAddIncomeModal = () => setShowAddIncomeModal(false);
	const handleShowAddIncomeModal = () => setShowAddIncomeModal(true);

	return (
		<AppProvider>
			<div className='container'>
				<h1 className='mt-3'><center><CashCoin /> PHinanz: A Financial Manager <CashCoin /></center></h1>
				<div className='row mt-3'>
					<Row>
						<div className='col-sm'>
							<Balance />
						</div>
					</Row>
					<Row>
						<div className='col-sm'>
							<TotalIncome />
						</div>
						
						<div className='col-sm'>
							<TotalExpenses />
						</div>
					</Row>
					
				<h3 className='mt-3'>INCOME
					{' '}
					<button type='button' className='btn btn-primary' onClick={handleShowAddIncomeModal}>
						Add New Income
					</button>
				</h3>
					
				<div className='row mt-3'>
					<div className='col-sm'>
						<IncomeList />
					</div>
				</div>
					
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

				<AddIncomeForm showAddIncomeModal={showAddIncomeModal}
					handleCloseAddIncomeModal={handleCloseAddIncomeModal}
				/>
			</div>
		</AppProvider>		
	);
};

export default App;