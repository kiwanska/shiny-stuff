import * as d3 from "d3";

export default function pie(dataset, id) {

  const width = 100;
  const height = 100;
  const radius = Math.min(width, height) / 2;
  const color = d3.scaleOrdinal()
    .range([ '#648C85', '#B3F2C9', '#528C18', '#C3F25C']);

  const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);

  const pie = d3.pie()
    .value(function(d) { return d.count; })
    .sort(null);

  const svg =  d3.select('#root')
    .append('svg')
    .attr("id", id)
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')')
    .selectAll('path')
    .data(pie(dataset))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d, i) {
      return color(d.data.label);
    });

  return svg;
}
