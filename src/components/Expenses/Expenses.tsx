import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props: { item: { date: any; title: string; amount: number; }[]; }) => {
    return (
        <Card className="expenses">
            <ExpenseItem
                title={props.item[0].title}
                amount={props.item[0].amount}
                date={props.item[0].date} />
            <ExpenseItem
                title={props.item[1].title}
                amount={props.item[1].amount}
                date={props.item[1].date} />
            <ExpenseItem
                title={props.item[2].title}
                amount={props.item[2].amount}
                date={props.item[2].date} />
        </Card>
    );
}

export default Expenses;