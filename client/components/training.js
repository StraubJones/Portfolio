const React = require('react')
const Scroll = require('react-scroll')
var Element = Scroll.Element
var scroller = Scroll.scroller

const options = {
  duration: 500,
  delay: 100,
  smooth: true
}
let elementName

function scrollTo (elementName) {
  scroller.scrollTo(elementName, options)
}
function scrollToFirst () {
  elementName = 'first-project'
  scrollTo(elementName)
}
function scrollToSecond () {
  elementName = 'second-project'
  scrollTo(elementName)
}
function scrollToThird () {
  elementName = 'third-project'
  scrollTo(elementName)
}
function scrollToFourth () {
  elementName = 'frontend'
  scrollTo(elementName)
}

class Training extends React.Component {
  render () {
    return (
      <div className='main'>
        <div>
          <figure className='section-header'>
            <h1>See me grow from a complete newcomer to a basic developer!</h1>
            <img src='./images/frontend/evolution.svg' />
            <figcaption>At the beginning of this page below you'll find my most advanced full-stack, standalone apps, built as part of the Hack Reactor curriculum. After that, you'll see some of my earliest development work, showcasing the full trajectory that led me from no experience to being able to build apps like the ones below in under a year.</figcaption>
          </figure>
          <button onClick={scrollToFirst} className='examples'>
            SOME EXAMPLES
            <i className='fa fa-2x fa-caret-down' />
          </button>

          <Element className='project-snapshot' name='first-project' id='first-project'>
            <h1>CollaBoard</h1>
            <h2>MY PART: SCRUM MASTER, REDUX, TEXT EDITOR</h2>
            <img alt='project screenshot' src='./images/CollaBoardinAction.png' />
            <figcaption>Built with Postgres, React, Redux, Express, and Node </figcaption>
            <figcaption>Also uses Socket.io, HTML5 Canvas, WebRTC, Draft.js, and Prism.js </figcaption>
            <p>A live-synched whiteboard and text editor, with peer-to-peer video chat and typed chat. Ideal for remote classrooms, for remote team management, and for technical interviewing.</p>
            <a href='https://collaboard-app.herokuapp.com/'>SEE THE APP</a>
            <a href='https://github.com/CollaBoard/CollaBoard'>PERUSE THE CODE</a>
          </Element>
          <button onClick={scrollToSecond} className='examples'>
            EVEN MORE
            <i className='fa fa-2x fa-caret-down' />
          </button>

          <Element className='project-snapshot' name='second-project' id='second-project'>
            <h1>Tournament Manager</h1>
            <h2>MY PART: PRODUCT OWNER, FIREBASE</h2>
            <img alt='project screenshot' src='./images/TournamentManager.png' />
            <figcaption>Built with Firebase, React, Express, and Node </figcaption>
            <p>A tournament manager for offline tournaments, for effortless brackets and stats management.</p>
            <a href='https://github.com/MKS47GreenfieldAndLegacy/Game-Manager'>PERUSE THE CODE</a>
          </Element>
          <button onClick={scrollToThird} className='examples'>
            MORE STILL
            <i className='fa fa-2x fa-caret-down' />
          </button>

          <Element className='project-snapshot' name='third-project' id='third-project'>
            <h1>Intersectional Wage Gap Calculator and Graph Generator</h1>
            <h2>MY PART: PRODUCT OWNER, D3, ANGULAR FRONT-END</h2>
            <img alt='project screenshot' src='./images/WageGapCalculator.png' />
            <figcaption>Built with MongoDB, React, Express, and Node </figcaption>
            <figcaption>Also uses D3, Angular Material</figcaption>
            <p>Generates dynamic graphs regarding wage-gaps between various groups based on user-chosen variables.</p>
            <a href='https://github.com/MKS47GreenfieldAndLegacy/Wage-Gap-Calculator'>PERUSE THE CODE</a>
          </Element>
          <button onClick={scrollToFourth} className='examples'>
            EARLIER WORK
            <i className='fa fa-2x fa-caret-down' />
          </button>
        </div>
        <div>
          <Element className='section-header frontend' name='frontend' id='frontend'>
            <h1>My Earliest Development Projects</h1>
            <figcaption>Everything you see after this was built by myself in a day or weekend and hosted on Surge.sh, as part of The Iron Yard Front-End Engineering curriculum. The two group projects are labeled as such, but everything else, flaws and all, is entirely mine. Days that are missing were usually days that did not produce a visible result, such as JS exercises, etc. For more on the differences between The Iron Yard and Hack Reactor, and why I switched, see a few of my blog posts
              <a href='https://medium.com/@christian.straubhaar/hack-reactor-vs-the-iron-yard-part-1-autonomy-and-pacing-e3a5cdb4957#.4a7aywxer'> HERE</a> and
              <a href='https://medium.com/@christian.straubhaar/survival-on-coding-bootcamp-teaching-styles-hack-reactor-vs-iron-yard-pt-2-a9af58b847de#.tseou4d5x'> HERE</a>.
            </figcaption>
          </Element>
          <figure className='project-snapshot'>
            <h1>Weekend 3</h1>
            <img src='./images/frontend/battle.png' />
            <p className='frontend-p'>Group Project 2: Build a Basic Battle Game</p>
            <a href='http://jcsjtiy20battle.surge.sh'>SEE IT LIVE</a>
          </figure>
          <figure className='project-snapshot'>
            <h1>Day 18</h1>
            <img src='./images/frontend/todo.png' />
            <p className='frontend-p'>Super Basic To Do App</p>
            <a href='http://jcsjtiyday18todo.surge.sh'>SEE IT LIVE</a>
          </figure>
          <figure className='project-snapshot'>
            <h1>Day 17</h1>
            <img src='./images/frontend/etsy.png' />
            <p className='frontend-p'>Build an Etsy Search Clone</p>
            <a href='http://jcsjday17fakeetsy.surge.sh'>SEE IT LIVE</a>
          </figure>
          <figure className='project-snapshot'>
            <h1>Day 13</h1>
            <img src='./images/frontend/accordion.png' />
            <p className='frontend-p'>Build a Basic Accordion Menu</p>
            <a href='http://jcsjtiyday13accordion.surge.sh'>SEE IT LIVE</a>
          </figure>
          <figure className='project-snapshot'>
            <h1>Day 12</h1>
            <img src='./images/frontend/tabs.png' />
            <p className='frontend-p'>CSS-Styled Hash-Redirecting Tabs</p>
            <a href='http://jcsjtiyday12tabs.surge.sh'>SEE IT LIVE</a>
          </figure>
          <figure className='project-snapshot'>
            <h1>Weekend 2</h1>
            <img src='./images/frontend/calc.png' />
            <p className='frontend-p'>Build a Full Calculator</p>
            <a href='http://jcsjtiycalculator3.surge.sh/'>SEE IT LIVE</a>
          </figure>
          <figure className='project-snapshot'>
            <h1>Day 8</h1>
            <img src='./images/frontend/coercion.png' />
            <p className='frontend-p'>JS Coercion Reference Table</p>
            <a href='http://jcsjday8coerciontable.surge.sh'>SEE IT LIVE</a>
          </figure>
          <figure className='project-snapshot'>
            <h1>Day 8</h1>
            <img src='./images/frontend/basiccalc.png' />
            <p className='frontend-p'>Build a Super Basic Calculator</p>
            <a href='http://jcsjday8calculator4operators.surge.sh'>SEE IT LIVE</a>
          </figure>
          <figure className='project-snapshot'>
            <h1>Day 7</h1>
            <img src='./images/frontend/bikeshop.png' />
            <p className='frontend-p'>Group Project 1: Basic Bike Shop Site</p>
            <a href='http://jcsjday7bikebetter.surge.sh'>SEE IT LIVE</a>
          </figure>
          <figure className='project-snapshot'>
            <h1>Day 6</h1>
            <img src='./images/frontend/responsive.png' />
            <p className='frontend-p'>Responsiveness Exercises</p>
            <a href='http://jcsjtiyday6.surge.sh'>SEE IT LIVE</a>
          </figure>
          <figure className='project-snapshot'>
            <h1>Weekend 1</h1>
            <img src='./images/frontend/pixel2.png' />
            <p className='frontend-p'>Pixel Perfect Part 2: Full Page (based on image below)</p>
            <a href='http://jcsjtiyweek1weekend.surge.sh/'>SEE IT LIVE</a>
            <img src='./images/frontend/surf-and-paddle.png' />
          </figure>
          <figure className='project-snapshot'>
            <h1>Day 2</h1>
            <img src='./images/frontend/pixel.png' />
            <p className='frontend-p'>Pixel Perfect: Create a Pixel Perfect HTML/CSS Mockup (based on image below)</p>
            <a href='http://jcsjtiyday2try2.surge.sh/'>SEE IT LIVE</a>
            <img src='./images/frontend/octodex.png' />
          </figure>
          <figure className='project-snapshot'>
            <h1>Day 1 (Epic Mode!)</h1>
            <img src='./images/frontend/bash.png' />
            <p className='frontend-p'>Bash Script to Create TIY Daily File Structure</p>
            <a href='https://gist.github.com/StraubJones/be1a77f6d490bec57e7a8a04728414c1'>SEE THE GIST</a>
          </figure>
          <figure className='project-snapshot'>
            <h1>Day 1</h1>
            <img src='./images/frontend/basicpage.png' />
            <p className='frontend-p'>Super Basic Webpage</p>
            <a href='http://jcsjbasicpage2.surge.sh/index.html'>SEE IT LIVE</a>
            <h1>Compare this <i className='fa fa-2x fa-arrow-up' /> with the website you're on.<br />
            Look how far it's come!</h1>
          </figure>
        </div>
        <br />
      </div>
    )
  }
}

module.exports = Training
