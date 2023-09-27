import React from 'react';
import ReactDOM from 'react-dom';
import PieChartComponent from './PieChart';

const App = () => {
  const totalId = 2;

  return (
    <div>
      <h1>Pie Chart Example</h1>
      <PieChartComponent totalId={totalId} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
