import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

//TODO: how to export this to another file to be used globally.
type Expense = {
    id: string;
    title: string;
    amount: number;
    date: Date;
}

const NewExpense = (props: { onAddExpense: (arg: Expense) => void }) => {
// const NewExpense = ({ onAddExpense }: { onAddExpense: (arg: Expense) => void }) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData: { title: string; amount: number; date: Date; }) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onAddExpense(expenseData);
        // onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
}

export default NewExpense;