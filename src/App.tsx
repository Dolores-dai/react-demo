import React from 'react';
import './App.scss';
import ReactEcharts from 'echarts-for-react';

const App: React.FC = () => {
    return (
        <div className="App">
            <ReactEcharts
                key={Math.random() + new Date().getTime()}
                option={chartOptions}
                onEvents={onEvents}
                notMerge={true}
                lazyUpdate={true}
                style={{ height: '230px', left: '12px', top: '-8px' }}
            />
        </div>
    );
};

const chartOptions = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }
    ]
};

const charOnClick = () => {
    alert('click!');
};

const onEvents = {
    click: charOnClick
};

export default App;
