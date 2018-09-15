import React, { Component } from 'react';
import * as d3 from "d3";

class BarChart extends Component {
    //component lifecycle
    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        //an array to fool with
    
        const data= this.props.data;
        // like a long variable with jQuery attributes
        const svg = d3.select("body")
            .append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height)
            .style("margin-left", 100);

        // enter and append here work to do something, the svg  still has the d3 methods available to it and these are more of them
        // 'rect' is rectangle :)
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => this.props.height - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10) 
            .attr("fill", "green")
            ;
        
        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => this.props.height - (10 * d) - 3)
    }
    render(){
        return <div id={"#" + this.props.id}></div>
    }
}

export default BarChart;