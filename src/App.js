import "./App.css";
import Expense from './components/Expenses/Expense';
import NewExpense from "./components/NewExpense/NewExpense";


const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 2, 5),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = expense =>{
    console.log('In App.js');
    console.log(expense);
  }
  const addExpenseFilterHandler = expenseByYear =>{
    console.log('In App.js change filter by year!');
    console.log(expenseByYear);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense data={expenses}/>
    </div>
  );
};
export default App;
