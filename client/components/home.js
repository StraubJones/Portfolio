const React = require('react')

class Home extends React.Component {
  render () {
    return (
      <div>
        <figure className='hero'>
          <img alt='Headshot' src='./images/headshot.jpg' />
          <h1>Welcome!</h1>
          <figcaption>I am Christian Straubhaar-Jones, a full-stack web developer.
          I build apps that enable better teamwork, that can reach more users through accessibility, and that explore alternative tools to find more robust solutions.
          </figcaption>
        </figure>
        <br />
      </div>
    )
  }
}

module.exports = Home
