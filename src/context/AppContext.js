import { useReducer, createContext } from "react";

const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
		case 'ADD_INCOME':
			return {
				...state,
				income: [...state.income, action.payload],
			};
		case 'DELETE_INCOME':
			return {
				...state,
				income: state.income.filter(
					(income_item) => income_item.id !== action.payload
				),
			};
		default:
			return state;
	}
};

const initialState = {
	expenses: [],
	income: [{id: 12, name: 'Salary', cost: 150}],
};

export const AppContext = createContext();


export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				expenses: state.expenses,
				income: state.income,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};