import './Chart.css';
import ChartBar from './ChartBar';

//TODO: update dataPoints type using global custom type.
const Chart = (props: { dataPoints: { key: string; value: number; maxValue: number; label: string; }[]; }) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
}

export default Chart;