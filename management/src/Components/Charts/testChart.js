import React, {Component} from 'react';
import Loader from "../Handlers/Loader/loader";

class ProjectionChart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        if (this.props.dataset) {
            let opponent = this.props.dataset["line_01"].opponent;
            let you = this.props.dataset["line_01"].you;
            console.log(opponent);
            let weeks = [];
            let opponent_sin = [];
            let your_sin = [];
            for (let week of opponent.points) {
                weeks.push('week ' + week.x);
                opponent_sin.push(week.y);
            }
            for (let pimppi of you.points){
                your_sin.push(pimppi.y);
            }

            var LineChart = require("react-chartjs").Line;
            var data = {
                labels: weeks,
                datasets: [
                    {
                        label: "Opponent",
                        fillColor: "rgba(111, 221, 221, 0.2)",
                        strokeColor: "rgba(220,220,220,0.8)",
                        highlightFill: "rgba(213, 43, 30, 1)",
                        highlightStroke: "rgba(220,220,220,1)",
                        data: opponent_sin
                    },
                    {
                        label: "You",
                        fillColor: "rgba(221, 221, 221, 0.2)",
                        strokeColor: "rgba(151,187,205,0.8)",
                        highlightFill: "rgba(221, 221, 221, 1)",
                        highlightStroke: "rgba(151,187,205,1)",
                        data: your_sin
                    }
                ]
            };
            var options = {
                //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
                scaleBeginAtZero: true,

                //Boolean - Whether grid lines are shown across the chart
                scaleShowGridLines: true,

                //String - Colour of the grid lines
                scaleGridLineColor: "rgba(0,0,0,.05)",

                //Number - Width of the grid lines
                scaleGridLineWidth: 10,

                //Boolean - Whether to show horizontal lines (except X axis)
                scaleShowHorizontalLines: false,

                //Boolean - Whether to show vertical lines (except Y axis)
                scaleShowVerticalLines: false,

                //Boolean - If there is a stroke on each bar
                barShowStroke: false,

                //Number - Pixel width of the bar stroke
                barStrokeWidth: 100,

                //Number - Spacing between each of the X value sets
                barValueSpacing: 20,

                responsive: true,

            }
            return (
                <LineChart data={data} options={options} width={this.props.width} height={this.props.height}/>
            );
        } else {
            return (<div style={{padding: '20px'}}><Loader/></div>);
        }

    }
}

export default ProjectionChart;
