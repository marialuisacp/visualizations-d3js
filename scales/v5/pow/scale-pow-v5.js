/*
 *  D3 Basics - Aprendendo D3.js
 *  ----------------
 *  Maria Luisa Costa Pinto
 *  http://malu.dev
 *
 *  Scale exponencial - D3 v5
 *
 */

const x_scale_pow = d3.scalePow()
    .domain(d3.extent([1, 100]))
    .exponent(2)
    .range([0, width - margin.right - margin.left])

const svg = d3.select('#box-scale').append('svg')
    .attr('width', width + margin.left)
    .attr('height', height + margin.bottom)
svg.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + height + ')')
    .call(d3.axisBottom(x_scale_pow))
