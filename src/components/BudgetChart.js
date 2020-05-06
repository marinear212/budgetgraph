import React from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';

class BudgetChart extends React.Component {
    state = { chartData: null }

    componentDidMount() {
        this.loadChart();
        this.prepareData();
    };

    componentDidUpdate(prevProps) {
        if (prevProps.entries !== this.props.entries)
            this.prepareData();

        this.loadChart();
    };

    prepareData = () => {
        const initialData = [
            {
                t: "2020-05-02",
                y: 3000
            }
        ];

        if (this.props.entries.length > 0) {
            const entryData = this.props.entries.map((entry) => {
                const yearData = [];
                for(let i = 0; i < 12; i++) {
                    const dateNow = new Date();
                    let month = entry.recurringDate < dateNow.getDate() ? dateNow.getMonth() + 2 + i : dateNow.getMonth() + 1 + i;
                    const year = month > 12 ? dateNow.getFullYear() + 1 : dateNow.getFullYear();
                    month = month === 12 ? 12 : month % 12;
    
                    const monthData = {
                        t: `${year}-${("0" + month).slice(-2)}-${("0" + entry.recurringDate).slice(-2)}`,
                        y: entry.amount
                    };
    
                    yearData.push(monthData);
                };
    
                return yearData;
            });
            
            let unsortedData = initialData;

            for(let i = 0; i < entryData.length; i++) {
                unsortedData = unsortedData.concat(entryData[i]);
            };

            let finalData = unsortedData.sort((a, b) => {
                if (a.t < b.t) return -1;
                if (a.t > b.t) return 1;
                return 0;
            });

            for (let i = 1; i < finalData.length; i++) {
                finalData[i].y += finalData[i-1].y;
            };
            
            this.setState({ chartData: finalData });
        };
    };

    loadChart = () => {
        var ctx = document.getElementById('budgetchart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    data: this.state.chartData
                }]
            },

            // Configuration options go here
            options: {
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'month'
                        },
                        ticks: {
                            min: !this.state.chartData ? 0 : this.state.chartData[0].t
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0
                        }
                    }]
                }
            }
        });
    };
    

    render() {
        return (
            <canvas id="budgetchart" width="800" height="400"></canvas>
        );
    };    
}

const mapStateToProps = state => {
    return {
        entries: state.entries
    };
};

export default connect(mapStateToProps)(BudgetChart)