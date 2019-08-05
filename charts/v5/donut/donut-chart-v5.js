/*
 *  D3 Basics - Aprendendo D3.js
 *  ----------------
 *  Maria Luisa Costa Pinto
 *  http://malu.dev
 *
 *  Donut chart - D3 v5
 *  Construcao do grafico
 *
 */

const dataset = { 'A': 15, 'B': 20, 'C':35, 'D': 10, 'E': 20};
const svg = d3.select('#box-chart').append('svg')

svg.attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)

const color = d3.scaleOrdinal()
  .domain(dataset)
  .range(['#DA3C78', '#8E44AD', '#0287D0', '#0EAC51', '#F39C12'])

const g = svg.append('g')
  .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

const pie = d3.pie()
  .value((d) => d.value)

const arc = d3.arc()
  .innerRadius(120)
  .outerRadius(200)

const part = g.selectAll('.part')
  .data(pie(d3.entries(dataset)))
  .enter()
  .append('g')
  
part.append('path')
  .attr('d', arc)
  .attr('fill', (d, i) => color(i))

part.append('text')
  .attr('transform', (d) => 'translate(' + arc.centroid(d) + ')')
  .text((d) => d.data.key)
  .attr('fill', 'white');