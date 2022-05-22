import React, {useState, useEffect, useContext } from 'react';
import IncomeItem from './IncomeItem';
import { AppContext } from '../context/AppContext';

const IncomeList = () => {	
	const { income } = useContext(AppContext);

	const [filteredIncome, setfilteredIncome] = useState(income || []);
	
	useEffect(() => {
		setfilteredIncome(income);
	}, [income]);

	useEffect(() => {
		const json = JSON.stringify(income);
		localStorage.setItem("filteredincome", json);
	}, [income]);

	const handleChange = (event) => {
		const searchResults = income.filter((filteredIncome) =>
			filteredIncome.name.toLowerCase().includes(event.target.value)
		);
		setfilteredIncome(searchResults);
	};
	
	if (income.length === 0){
		return(
			<> 
				<input
					type='text'
					className='form-control mb-2 mr-sm-2'
					placeholder='Type to search...'
					onChange={handleChange}
				/>
				<p style={{color: "red"}}>
					<b><i>NO INCOME ADDED YET!</i></b>
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
				{filteredIncome.map((income) => (
					<IncomeItem
						id={income.id}
						name={income.name}
						cost={income.cost}
					/>
				))}
			</ul>
		</>
	);
};

export default IncomeList;