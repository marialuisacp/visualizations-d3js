/*
 *  D3 Basics - Aprendendo D3.js
 *  ----------------
 *  Maria Luisa Costa Pinto
 *  http://malu.dev
 *
 *  Scale linear - D3 v5
 *
 */

const x_scale_linear = d3.scaleLinear()
    .domain([0, 1000])
    .range([0, width - margin.right]);

const svg = d3.select('#box-scale').append('svg')
    .attr('width', width + margin.left)
    .attr('height', height + margin.bottom)
svg.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + height + ')')
    .call(d3.axisBottom(x_scale_linear))

