/*
 *  D3 Basics - Aprendendo D3.js
 *  ----------------
 *  Maria Luisa Costa Pinto
 *  http://malu.dev
 *
 *  Bar chart horizontal - D3 v5
 *  Construcao do grafico
 *
 */

const data = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((d) => ({
  value: d3.randomUniform()() * 10, category: d
}));

const heightBar = 8;

const svg = d3.select('#box-chart').append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)

const g1 = svg.append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

const x_scale = d3.scaleLinear()
  .range([0, width - (margin.right * 2 - margin.left)])
  .domain([0, d3.max(data, (d) => d.value)])

const y_scale = d3.scaleBand()
  .rangeRound([height - margin.bottom, 0], 0)
  .domain(data.map((d) => d.category))

const g = g1.append('g')
  .call(d3.axisLeft(y_scale))

const areaBars = g1.append('g')
  .attr('transform', 'translate(2,0)')

const bars = areaBars.selectAll('.bar')
  .data(data)
  .enter()

const calcMiddleBar = (d) => {
  const mrg = (height / data.length) / 2 - (heightBar / 2)
  return y_scale(d.category) + mrg
}

bars.append('rect')
  .attr('y', (d) => calcMiddleBar(d))
  .attr('fill', '#0077C0')
  .attr('height', heightBar)
  .attr('x', 0)
  .attr('width', (d) => x_scale(d.value))

bars.append('text')
  .attr('y', (d) => calcMiddleBar(d) + 8)
  .attr('x', (d) => x_scale(d.value) + 8)
  .style('font-size', '12px')
  .text((d) => d.value)