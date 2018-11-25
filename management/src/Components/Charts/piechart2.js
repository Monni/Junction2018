import React, {Component} from 'react';
import Loader from "../Handlers/Loader/loader";

class Piirakka2Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    //red green blue
    render() {

        if (this.props.dataset) {
            let green = this.props.dataset["pie_02"].green;
            let red = this.props.dataset["pie_02"].red;
            let blue = this.props.dataset["pie_02"].blue;
            console.log(green);
            var DoughnutChart = require("react-chartjs").Doughnut;
            var data = [
                {
                    value: green,
                    color: "green",
                    highlight: "#FF5A5E",
                    label: "green"
                },
                {
                    value: blue,
                    color: "yellow",
                    highlight: "#5AD3D1",
                    label: "blue"
                },
                {
                    value: red,
                    color: "red",
                    highlight: "#FFC870",
                    label: "red"
                }
            ]
            var options = {
                segmentShowStroke: true,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 5,
                percentageInnerCutout: 75, // This is 0 for Pie charts
                animationSteps: 150,
                animationEasing: "easeOutBounce",
                animateRotate: true,
                responsive: true,

            }
            return (
                <DoughnutChart data={data} options={options} width={this.props.width} height={this.props.height}/>
            );
        } else {
            return (<div className="pull-right" style={{padding: '20px'}}><Loader/></div>);
        }

    }
}

export default Piirakka2Chart;
