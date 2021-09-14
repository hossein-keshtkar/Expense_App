import "./Chart.css";
import Bar from "./Bar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <Bar
            key={dataPoint.id}
            maxValue={totalMaximum}
            lable={dataPoint.lable}
            value={dataPoint.value}
          />
        );
      })}
    </div>
  );
};

export default Chart;
