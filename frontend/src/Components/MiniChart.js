import { LineChart, Line } from "recharts";

const MiniChart = (props) => {

    const {data, label} = props

    return (
        <>
            <div className="col">
                <h1 className="mb-0">{data.length}</h1>
                <small>{label}</small>
                <small></small>
            </div>
            <div className="col">
                <LineChart width={200} height={100} data={data}>
                    <Line type="monotone" dataKey="amt" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </div>
        </>
    )
}
export default MiniChart;