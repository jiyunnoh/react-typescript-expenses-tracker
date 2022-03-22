import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props: { 
    //TODO: update arg type using global custom type.
    onSaveExpenseData: (arg: { title: string; amount: number; date: Date; }) => void; 
    onCancel: React.MouseEventHandler<HTMLButtonElement> | undefined; 
}) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    // initiate with string because when you listen to event for an input element and read vaule of an input element, it will be a string.
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // react or browser will make sure that we get event object when change event occur in line 13.
    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        // prevent the request from being sent by default. Then the page will not reload.
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>;
}

export default ExpenseForm;
