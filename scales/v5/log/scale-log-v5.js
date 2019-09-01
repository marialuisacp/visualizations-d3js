/*
 *  D3 Basics - Aprendendo D3.js
 *  ----------------
 *  Maria Luisa Costa Pinto
 *  http://malu.dev
 *
 *  Scale log - D3 v5
 *
 */

const x_scale_log = d3.scaleLog()
    .range([0, width - margin.right - margin.left])

const svg = d3.select('#box-scale').append('svg')
    .attr('width', width + margin.left)
    .attr('height', height + margin.bottom)
svg.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + height + ')')
    .call(d3.axisBottom(x_scale_log))

