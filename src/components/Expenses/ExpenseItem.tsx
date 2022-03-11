import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { ReactChild, ReactFragment, ReactPortal } from 'react';

const ExpenseItem = (props: { date: any; title: boolean | ReactChild | ReactFragment | ReactPortal; amount: boolean | ReactChild | ReactFragment | ReactPortal; }) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;