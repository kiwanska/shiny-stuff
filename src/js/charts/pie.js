import * as d3 from "d3";

export default function pie(data) {

  const { dataset, size, id } = data;
  const radius = size / 3;
  const color = d3.scaleOrdinal()
    .range([ '#20DB77', '#40E08B', '#60E59E', '#80EBB2']);

  const dataSum = dataset.map( (d) => d.count ).reduce((a, b) => a + b, 0);

  const pie = d3.pie()
    .value((d) => d.count )(dataset);

  const arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

  const labelArc = d3.arc()
    .outerRadius(radius + 20)
    .innerRadius(radius + 20);

  const innerLabelArc = d3.arc()
    .outerRadius(radius - 45)
    .innerRadius(radius - 45);

  const svg = d3.select("#root")
    .append("svg")
    .attr("width", size)
    .attr("height", size)
    .append("g")
    .attr("transform", "translate(" + size/2 + "," + size/2 +")");

  const g = svg.selectAll("arc")
    .data(pie)
    .enter().append("g")
    .attr("class", "arc");

  g.append("path")
    .attr("d", arc)
    .style("fill", (d) => color(d.data.label) );

  g.append("text")
    .attr('class', 'label')
    .attr("transform", (d) => "translate(" + labelArc.centroid(d) + ")" )
    .text(function(d) { return d.data.label;})
    .attr("text-anchor", "middle")
    .style("fill", "#000");

  g.append("text")
    .attr('class', 'counter')
    .attr("transform", (d) =>  "translate(" + innerLabelArc.centroid(d) + ")" )
    .text((d) => Math.round((d.data.count*100/dataSum), -1) + '%' )
    .attr("text-anchor", "middle")
    .style("fill", "#fff");
}
