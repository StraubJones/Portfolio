const React = require('react');

class Humanities extends React.Component {
  render(){
    return (
      <div className="main">
        <figure className="section-header">
          <h1 className="long-title">Digital Humanities Projects from my PhD</h1>
          <figcaption>Here you can see the work I did during my PhD in German, focusing on medieval mystic literature and critical masculinity / gender studies. It was participating in this work that led me to find my true passion for good software and eventually leave behind academia in order to retrain for web development.</figcaption>
          <h3><i className="fa fa-3x fa-caret-down"></i></h3>
        </figure>
        <figure className="project-snapshot">
          <h1>Rivalrous Masculinities</h1>
          <img src="./images/rivmasc.png"/>
          <p>Rivalrous Masculinities was a 2-year project funded by the Humanities Writ Large Initiative at Duke, which was itself supported by the Mellon Foundation. The project was led jointly by Dr. Ann Marie Rasmussen, Steffen Kaupp, and myself. The core of the project was the development and instruction of two courses in which the students curated digital and physical exhibitions on changes in representations of masculinity over time. These courses were taught concurrently with similarly-themed courses in German universities, and each semester we had several teleconferenced class sessions held jointly across the Atlantic. We also brought in speakers, guest experts, and visiting students from Germany to facilitate the project, as well as organizing conference panels and whole symposiums on various aspects of the topic, medieval and modern.</p>
          <a href="http://humanitieswritlarge.duke.edu/projects/rivalrous-masculinities">SEE MORE ABOUT THE PROJECT</a>
          <a href="http://prezi.com/vzhsm45_rycz/?utm_campaign=share&utm_medium=copy&rc=ex0share">WATCH A PREZI DESCRIBING IT</a>
        </figure>
        <figure className="project-snapshot">
          <h1>Digital Pedagogical Resources Project</h1>
          <img src="./images/scalar.png"/>
          <p>Done as part of my year at the Duke PhD Lab in Digital Knowledge, this project is intended as an on-going, growing collection of resources to help those seeking to use bring digital tools into their classroom. Each entry focuses on one tool, usually a piece of software or website, that instructors can use to a wide variety of effects. This is intended as an open, on-going project, so please let me know if you know of good (ideally free) digital pedagogical tools and would want to add to our project by submitting a short write-up of the tool via the contact page here.</p>
          <a href="http://scalar.usc.edu/works/phd-lab-pedagogy-project/index">PERUSE THE PROJECT</a>
          <a href="http://sites.fhi.duke.edu/phdlab/">LEARN MORE ABOUT THE DUKE PHD LAB IN DIGITAL KNOWLEDGE</a>
        </figure>
        <br />
      </div>
    )
  }
}

  module.exports = Humanities;
