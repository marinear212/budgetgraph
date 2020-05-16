import React from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';

class BudgetChart extends React.Component {
    state = { 
        chartData: null,
        initialData: {
            t: "2020-05-02",
            y: 3000
        },
        chartLength: 24
    }

    componentDidMount() {
        this.loadChart();
        this.prepareData();
    };

    componentDidUpdate(prevProps) {
        if (prevProps.entries !== this.props.entries)
            this.prepareData();

        this.loadChart();
    };

    dailyPatternType = (detail) => {
        const endDate = new Date(detail.patternDescription.endDate);
        const startDate = new Date(detail.patternDescription.startDate);
        let countDate = new Date(startDate);
        let dateArray = [];

        while (countDate <= endDate) {
            dateArray.push({
                t: new Date(countDate),
                y: detail.amount
            })

            countDate.setDate(countDate.getDate() + 1)
        }

        return dateArray;
    }

    weekPatternType = (detail) => {
        const endDate = new Date(detail.patternDescription.endDate);
        const startDate = new Date(detail.patternDescription.startDate);
        const multiplier = 7 * detail.patternFrequency;

        let countDate = new Date(startDate);
        let dateArray = [];

        for(const day in detail.patternDescription.weekdays){
            if (detail.patternDescription.weekdays[day] === true) {
                countDate = new Date(startDate);

                while(countDate.getDay() !== parseInt(day)) {
                    countDate.setDate(countDate.getDate() + 1);
                }

                while(countDate <= endDate) {
                    dateArray.push({
                        t: new Date(countDate),
                        y: detail.amount
                    });
    
                    countDate.setDate(countDate.getDate() + multiplier)
                }                
            }            
        }

        return dateArray;
    }

    monthPatternType = (detail) => {
        const endDate = new Date(detail.patternDescription.endDate);
        const startDate = new Date(detail.patternDescription.startDate);

        let countDate = new Date(startDate);
        let dateArray = [];

        detail.patternDescription.dates.forEach(date => {
            countDate = new Date(startDate);
            countDate.setDate(1);
            
            while(countDate.getDate() !== parseInt(date)) {
                countDate.setDate(countDate.getDate() + 1);
            }

            while(countDate <= endDate) {
                if (countDate >= startDate) {
                    dateArray.push({
                        t: new Date(countDate),
                        y: detail.amount
                    });
                }               

                countDate.setMonth(countDate.getMonth() + parseInt(detail.patternFrequency));
            }
        })

        return dateArray;
    }

    yearPatternType = (detail) => {
        const endDate = new Date(detail.patternDescription.endDate);
        const startDate = new Date(detail.patternDescription.startDate);

        let countDate = new Date(startDate);
        let dateArray = [];

        /// TODO
        for(const month in detail.patternDescription.months){
            if (detail.patternDescription.months[month] === true) {
                countDate = new Date(startDate);
                countDate.setDate(1);

                while(countDate.getMonth() !== parseInt(month)) {
                    countDate.setMonth(countDate.getMonth() + 1);
                }

                detail.patternDescription.dates.forEach(date => {
                    countDate = new Date(startDate);
                    countDate.setDate(1);
                    
                    while(countDate.getDate() !== parseInt(date)) {
                        countDate.setDate(countDate.getDate() + 1);
                    }
        
                    while(countDate <= endDate) {
                        if (countDate >= startDate) {
                            dateArray.push({
                                t: new Date(countDate),
                                y: detail.amount
                            });
                        }               
        
                        countDate.setMonth(countDate.getMonth() + parseInt(detail.patternFrequency));
                    }
                })                
            }            
        }
    }

    neverPatternType = (detail) => {

    }

    prepareData = () => {

        if (this.props.entries.length > 0) {
            const entryData = this.props.entries.map(({id, detail}) => {
                switch (detail.patternType) {
                    case 'Daily':
                        return this.dailyPatternType(detail);
                    case 'Week':
                        return this.weekPatternType(detail);
                    case 'Month':
                        return this.monthPatternType(detail);
                    case 'Year':
                        return null;
                    default:
                        return null;
                }
            });


            console.log(entryData);

                /*const yearData = [];
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
            
            this.setState({ chartData: finalData });*/
        };
    };

    loadChart = () => {

        let ctx = document.getElementById('budgetchart').getContext('2d');
        // eslint-disable-next-line
        let chart = new Chart(ctx, {
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