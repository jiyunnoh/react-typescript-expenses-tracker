import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

//TODO: update props type using global custom type.
const ExpenseItem = (props: { date: Date; title: string; amount: number; }) => {
  const [title, setTitle] = useState(props.title);

  const eventHandler = () => {
    setTitle('Updated!');
    console.log(title);
  }

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
          {/* Only points to function, not executes. 
        If using with (), will be executed when JSX code is returned and this whole line will be parsed.  */}
          <button onClick={eventHandler}>Change Title</button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;