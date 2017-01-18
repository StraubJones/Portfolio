const React = require('react');
const Link = require('react-router').Link

class Nav extends React.Component {
  render(){
    return (
      <div className="nav">
        <img className="monogram" src="./images/Monogram.png"/>
        <Link className="nav-last" activeClassName="active-nav" to="/contact">Contact</Link>
        <Link activeClassName="active-nav" to="/about">About</Link>
        <Link activeClassName="active-nav" to="/humanities">DH</Link>
        <Link activeClassName="active-nav" to="/frontend">Front-End</Link>
        <Link activeClassName="active-nav" to="/fullstack">Full-Stack</Link>
      </div>
    )
  }
};

class Footer extends React.Component {
  render(){
    return (
      <div className="footer">
        <p className="copyright">Copyright 2017©</p>
        <a href="https://github.com/StraubJones"><img src="./images/footer/GitHub.svg"></img></a>
        <a href="https://medium.com/@christian.straubhaar"><img src="./images/footer/MediumLogo.svg"></img></a>
        <a className="nav-last" href="https://www.linkedin.com/in/christianstraubhaar"><img src="./images/footer/LinkedIn.svg"></img></a>
      </div>
    )
  }
};
const Container = (props) =>
  <div>
    <Nav />
    {props.children}
    <Footer />
  </div>


module.exports = Container;
