/*
 *  D3 Basics - Aprendendo D3.js
 *  ----------------
 *  Maria Luisa Costa Pinto
 *  http://malu.dev
 *
 *  Line chart - D3 v5
 *  Construcao do grafico
 *
 */

const x_scale = d3.scaleLinear()
  .domain([0, 8]) 
  .range([0, width - margin.left - margin.right]);
const y_scale = d3.scaleLinear()
  .domain([0, 1])
  .range([height, 0]);

const line = d3.line()
  .x((d, i) => (x_scale(i) + margin.left))
  .y((d) => y_scale(d.y));

const randomData = () => d3.range(9).map((d) => ({ y: d3.randomUniform()() }));

const dataset = [
		{ data: randomData(), color: '#fa983a' }, 
		{ data: randomData(), color: '#0077c0' }, 
		{ data: randomData(), color: '#7e349d' }
	];

const svg = d3.select('#box-chart').append('svg')

const g = svg.attr('width', width + margin.left)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

g.append('g')
  .attr('transform', 'translate(0,' + height + ')')
  .call(d3.axisBottom(x_scale))
g.append('g')
    .call(d3.axisLeft(y_scale))

dataset.map((item) => {
  svg.append('path')
    .datum(item.data)
    .attr('fill', 'transparent')
    .attr('stroke', item.color)
    .attr('stroke-width', '2px')
    .attr('d', line)
});