// This is a reminder to make a /now page based on this template: http://nownownow.com/about, see this example
const React = require('react')
class Now extends React.Component {
  render () {
    return (
      <div className='main'>
        <figure className='section-header'>
          <h1>What I'm Doing Now</h1>
          <figcaption className='center'>This are the things I'm currently focusing on:</figcaption>
          <ul className='now-lists'>
            <li>I'm working at <a className='small-link' href='http://www.fractalindustries.com/'>Fractal Industries</a> in Reston, Virginia. (They have a better public site coming soon.)</li>
            <li>I'm exploring volunteering opportunities in the DC area that allow me to use my skills to better the community.</li>
            <li>I'm looking for new friends in and new ways to explore the DC area, which I moved to a few months ago. <b>Board game groups</b> or <b>good tech meetups</b>, hit me up.</li>
            <li>I'm looking for ways to meet with other male feminist allies and engage in good, old-fashioned consciousness raising, where we deconstruct our experiences of toxic masculinity (like the Second Wave Feminists, but for dudes).</li>
          </ul>
        </figure>
        <br />
        <figure className='now-lists'>
          <figcaption className='center'>In volunteering, I'm looking specifically for:</figcaption>
          <ol>
            <li>Opportunities to teach coding to those who might otherwise not have the opportunity (with great organizations like <a className='small-link' href='http://www.blackgirlscode.com/'>Black Girls Code</a>, see my blogpost <a className='small-link' href='https://medium.com/@christian.straubhaar/volunteering-with-a-black-girls-code-dc-workshop-475f301583ee'>HERE</a>).</li>
            <li>Opportunities to mentor young men in healthy masculinity (either in group discussion groups, as with a lot of primary sexual assault prevention work, or individually, with programs like <a className='small-link' href='http://www.bbbs.org/'>Big Brother</a>).</li>
            <li>Opportunities to be an activist for intersectional feminist causes.</li>
          </ol>
          <figcaption>There are a lot of things I would like to get involved with, but I only have so much time and energy.</figcaption>
          <figcaption>If you have an opportunity that you think might interest me, please let me know! But please also don't be offended if I can't take you up on it right now.</figcaption>
          <figcaption>This /now page is inspired by <a className='no-marg' href='nownownow.com'>nownownow.com</a> </figcaption>
        </figure>
        <br />
        <br />
      </div>
    )
  }
}

module.exports = Now
