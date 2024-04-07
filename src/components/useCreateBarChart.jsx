import { useEffect, useRef } from "react";
import useResizeObserver from "./useResizeObserver";
import { max, scaleBand, scaleLinear, select, schemeCategory10 } from "d3";


export function UseCreateBarChart({data}) {
    const wrapperRef = useRef();
    const svgRef = useRef();
    const dimensions = useResizeObserver(wrapperRef)

    useEffect(() => {
        const svg = select(svgRef.current);
        if (!dimensions) return;

        // // sort the data
        // data.sort((a,b) => b.value - a.value);

        const xScale = scaleLinear()
                        .domain([0, 100])
                        .range([0, dimensions.width])

        const yScale = scaleBand()
                        .paddingInner(0.1)
                        .domain(data.map((value, index) => index))
                        .range([0,dimensions.height])


        // draw the bars
        svg.selectAll(".bar")
            .data(data, (entry, index) => entry.name)
            .join("rect")
            .attr("class","bar")
            .attr("fill", (entry,index) => schemeCategory10[index])
            .attr("x",0)
            .attr("y", (entry,index) => yScale(index))
            .attr("height",yScale.bandwidth())
            .transition()
                .duration(1000)
                .delay(function(d,i) {return i * 800})
            .attr("width", entry => xScale(entry.value))
            

        // draw labels
        svg.selectAll(".label")
            .data(data, (entry, index) => entry.name)
            .join("text")
            .attr("y", (entry,index) => yScale(index) + yScale.bandwidth() / 2)
            .transition()
                .duration(900)
                .delay(function(d,i) {return i * 800})
            .text(entry => `${entry.name}`)
            .attr("class","label")
            .attr("x",10)
            
            .attr("dy","0.32em")

    },[data, dimensions])
    return ( 
        <div ref={wrapperRef} style={{marginBottom: "2rem"}}>
        <svg ref={svgRef}></svg>
    </div>
     );
}
 
