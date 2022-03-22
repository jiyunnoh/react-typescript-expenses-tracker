import { useState } from "react";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

//TODO: update item type using global custom type.
const Expenses = (props: { item: { id: string; date: Date; title: string; amount: number; }[]; }) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;