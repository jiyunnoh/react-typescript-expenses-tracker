import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

//TODO: props가 function일 때 type?
const NewExpense = (props: any) => {
    const saveExpenseDataHandler = (enteredExpenseData: object) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;