/*
 *  D3 Basics - Aprendendo D3.js
 *  ----------------
 *  Maria Luisa Costa Pinto
 *  http://malu.dev
 *
 *  Scale band - D3 v5
 *
 */

const data = {
    band: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
};

const x_scale_band = d3.scaleBand()
    .rangeRound([0, width - margin.left])
    .domain(data.band);

const svg = d3.select('#box-scale').append('svg')
    .attr('width', width + margin.left)
    .attr('height', height + margin.bottom)
svg.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x_scale_band))

