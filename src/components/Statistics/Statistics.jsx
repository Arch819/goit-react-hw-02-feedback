import PropTypes from 'prop-types';
// import { Component } from 'react';

// export class Statistics extends Component {
//   render() {
//     const { good, neutral, bad } = this.props.statistics;
//     return (
//       <div>
//         <h2>Statistics</h2>
//         <ul>
//           <li>
//             <p>Good: {good}</p>
//           </li>
//           <li>
//             <p>Neutral: {neutral}</p>
//           </li>
//           <li>
//             <p>Bad: {bad}</p>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive feedback: {positivePercentage}%</p>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
