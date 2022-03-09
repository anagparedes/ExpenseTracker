import './NewExpense.css';
import React from 'react';
import '../ExpenseForm/ExpenseForm';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

const NewExpense = () =>{
return(<div className='new-expense'>
<ExpenseForm/>
</div>);

}

export default NewExpense;