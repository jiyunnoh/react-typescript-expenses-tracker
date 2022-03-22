import Chart from "../Chart/Chart"

//TODO: update expenses type using global custom type.
const ExpensesChart = (props: { expenses: {
    id: string;
    date: Date;
    title: string;
    amount: number;
}[]; }) => {
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ]

    //use 'of' because props.expenses is an array, not an object
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;