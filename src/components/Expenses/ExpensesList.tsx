import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

//TODO: props type??
const ExpensesList = (props: { items: { id: string; title: string; amount: number; date: Date; }[]; }) => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

    return (
        <ul className='expenses-list'>
            {props.items.map((expense: { id: string; title: string; amount: number; date: Date; }) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))};
        </ul>
    );
};

export default ExpensesList;