const React = require('react');

class Contact extends React.Component {
  render(){
    return (
      <div>
        <figure className="hero contact-headshot">
          <img alt="Waving Shot" src="./images/stairssmall.png" />
          <h1>Hello!</h1>
          <figcaption>Email is the best way to get a hold of me:</figcaption>
          <a href="mailto:christian.straubhaar@gmail.com"><i className="contact fa fa-envelope fa-3x"></i> <address>christian.straubhaar@gmail.com</address></a>
        </figure>
        <br />
        <br />
      </div>
    )
  }
}

  module.exports = Contact;
