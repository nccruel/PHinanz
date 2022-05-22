import React, {useState, useEffect, useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {	
	const { expenses } = useContext(AppContext);

	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	useEffect(() => {
		const json = JSON.stringify(expenses);
		localStorage.setItem("filteredexpenses", json);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};
	
	if (expenses.length === 0){
		return(
			<> 
				<input
					type='text'
					className='form-control mb-2 mr-sm-2'
					placeholder='Type to search...'
					onChange={handleChange}
				/>
				<p style={{color: "red"}}>
					<b><i>NO EXPENSES ADDED YET!</i></b>
				</p>
			</>
			
		)
	}

	return (
		<>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<ul className='list-group mt-3 mb-3'>
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
			</ul>
		</>
	);
};

export default ExpenseList;