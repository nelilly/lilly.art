import PropTypes from 'prop-types';
import { 
  chart,
  chartCaption,
  chartGrid,
  chartValues,
} from './style.module.css';

const BarChart = ({ title, details, userValue, chartData }) => {
  const xPos = (count, index) => (index * 100 / count) + (barWidth - count) * 2 + 1;
  const otherValue = chartData.map(({value}) => value).reduce((previousValue, currentValue) => previousValue + currentValue);
  const newChartData = [...chartData, {label: 'Other', value: 100 - otherValue}]
  const count = newChartData.length;
  const barWidth = 10;
  let isOther = true;

  const isLabel = (label, userValue) => {
    if(label === userValue){ isOther = false }
    return (label === userValue || (label === "Other" && isOther))
  };

  return (
    <>
      <figure className={chart}>
        <figcaption className={chartCaption}>
          <h3>{title}</h3>
          {details && <p>{details}</p>}
        </figcaption>
        
        <svg viewBox="0,0 1000,400" fill="currentColor" fontSize="18">
          <svg height="86%">
            <g className={chartGrid}>
              <rect y="0%" height="1" width="100%" />
              <rect y="25%" height="1" width="100%" />
              <rect y="50%" height="1" width="100%" />
              <rect y="75%" height="1" width="100%" />
              <rect y="99%" height="1" width="100%" />
            </g>
            {newChartData.map((item, index) => {
              const {label, value} = item;
              return (
              <g key={label}>
                <rect x={`${xPos(count, index) - barWidth / 2}%`} y={`${99 - value}%`} height={`${value}%`} stroke="currentColor" strokeWidth=".5" width={`${barWidth}%`} />
                {isLabel(label, userValue) && <><circle cx={`${xPos(count, index)}%`} cy={`${90.5 - value}%`} r="20" fill="#0088ff" /><text x={`${xPos(count, index)}%`} y={`${91 - value}%`} textAnchor="middle" alignmentBaseline="middle" fill="var(--color-canvas)" aria-label={`You use ${label} ${title}`}>You</text></>}
              </g>)
              }
              )
            }
          </svg>
            {newChartData.map(({label, value}, index) => 
            <g key={label}>
              <text x={`${xPos(count, index)}%`} y="91%" textAnchor="middle">{label}</text>
              <text x={`${xPos(count, index)}%`} y="97%" textAnchor="middle" className={chartValues}>{`${value.toFixed(2)}%`}</text>
            </g>
            )}
        </svg>
      </figure>
    </>
  );
};

export default BarChart;

BarChart.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  userValue: PropTypes.string,
  chartData: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
};
