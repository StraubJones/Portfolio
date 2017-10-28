const React = require('react')
const d3 = require('../vendor/d3.min.js')

let chartWidth, chartHeight

let chartMargins = {
  top: 20,
  right: 50,
  left: 50,
  bottom: 50
}
let skills = [
  { name: 'AngularJS 1.6.x', value: 1 },
  { name: 'React', value: 0.9 },
  { name: 'D3', value: 0.8 },
  { name: 'Google Material', value: 0.8 },
  { name: 'Teaching', value: 1 },
  { name: 'Sass', value: 1 },
  { name: 'Redux', value: 0.7 },
  { name: 'Node/Express', value: 0.8 },
  { name: 'MongoDB', value: 0.7 },
  { name: 'Agile Team Management', value: 0.9 }
]

class About extends React.Component {
  // ideas: http://bl.ocks.org/mbostock/3885304
  // more ideas (stretch goal): http://bl.ocks.org/mbostock/3885705
  // good ideas about dimensions: http://blog.webkid.io/responsive-chart-usability-d3/#Use_aspect_ratio_instead_of_fixed_heightr
  componentDidMount () {
    this.updateChart(window.innerWidth)
    window.addEventListener('resize', () => this.updateChart(window.innerWidth))
  }
  updateChart (winWidth) {
    let self = this
    this.setState({
      chartWidth: winWidth - chartMargins.right - chartMargins.left
    }, () => {
      self.setState({
        chartHeight: self.state.chartWidth * 0.7
      }, () => {
        let barWidth = self.state.chartWidth / 12
        // let vis = d3.select('.bar-graph')
        //   .html("")
        //   .append('svg')
        //   .attr('width', self.state.chartWidth)
        //   .attr('height', self.state.chartHeight)
          // .selectAll(".bar")
          // .data(skills)
          // .enter().append("rect")
          // .attr("transform", function(d, i) { return "translate(0," + i * barWidth + ")"; })
          // .attr("class", "bar")
          // // .attr("x", barWidth)
          // // .attr("y", function(d) { d.value })
          // .attr("width", barWidth)
          // .attr("height", function(d) { return height - y(d.val); });
      })
    })
  }
  render () {
    return (
      <div className='main'>
        <figure className='section-header'>
          <h1>About Me</h1>
          <figcaption className='center'>I have lived across Europe, North and South America.
            <br />I have examined 650-year-old <a href='http://www.bnu.fr/numistral/collections-numeriques/religions-theologie-et-sciences-religieuses'>manuscripts</a> under blacklight to find <a href='https://en.wikipedia.org/wiki/Palimpsest'>palimpsests</a>.
            <br />I am well-versed in a number of languages, living and dead: German, French, Latin, Middle High (Medieval) German.
            <br />
            <br />I've found my passion in software development.
            <br />I feel coding unlocks so many possibilities in today's world. I want to share that passion with you.
            <br />If you have a worthy project that needs some minor freelance or volunteer attention, and my skills fit your needs, let me know.
          </figcaption>
        </figure>
        <figure className='bar-graph' />
        <br />
      </div>
    )
  }
}
// TODO: add this caption above the chart
// <figcaption className="center">This D3 chart should give you an idea of my areas of expertise as a developer:</figcaption>

module.exports = About
