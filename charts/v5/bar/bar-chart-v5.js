/*
 *  D3 Basics - Aprendendo D3.js
 *  ----------------
 *  Maria Luisa Costa Pinto
 *  http://malu.dev
 *
 *  Bar chart - D3 v5
 *  Construcao do grafico
 *
 */

const x_scale = d3.scaleBand()
  .rangeRound([0, width - margin.left - margin.right]);
const y_scale = d3.scaleLinear()
  .domain([0, 1])
  .range([height, 0]);

const data = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((d) => ({ 
  value: d3.randomUniform()(), category: d }));

x_scale.domain(data.map((d) => d.category));
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

svg.selectAll('.bar')
  .data(data)
  .enter().append('rect')
  .attr('fill', '#0077C0')
  .attr('x', (d, i) => x_scale(d.category) + margin.left * 1.5)
  .attr('y', (d) => y_scale(d.value) + margin.top)
  .attr('width', 50)
  .attr('height', (d) => height - y_scale(d.value));