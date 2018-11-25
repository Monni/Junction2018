import React, {Component} from 'react';
import Loader from "../Handlers/Loader/loader";

class PiirakkaChart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    //red green blue
    render() {

        if (this.props.dataset) {
            let green = this.props.dataset["pie_01"].green;
            let red = this.props.dataset["pie_01"].red;
            let blue = this.props.dataset["pie_01"].blue;
            console.log(green);
            var PieChart = require("react-chartjs").Pie;
            var data = [
                {
                    value: green,
                    color: "green",
                    highlight: "#5AD3D1",
                    label: "Walked"
                },
                {
                    value: red,
                    color: "red",
                    highlight: "#FFC870",
                    label: "To walk"
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
                <PieChart data={data} options={options} width={this.props.width} height={this.props.height}/>
            );
        } else {
            return (<div className="pull-right" style={{padding: '20px'}}><Loader/></div>);
        }

    }
}

export default PiirakkaChart;
