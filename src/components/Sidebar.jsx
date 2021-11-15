import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Sebastián A. Cruz-Romero</a></h1>
              <span className="email"><i className="icon-mail"></i> sebastian.cruz6@upr.edu</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  {/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                {/* <li><a href="https://www.facebook.com/sebastian.cruz" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li> */}
                <li><a href="https://twitter.com/romerocruzsa" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                {/* <li><a href="https://www.instagram.com/romerocruzsa/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li> */}
                <li><a href="https://www.linkedin.com/in/romerocruzsa/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/romerocruzsa" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                {/* <li><a href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li> */}
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  <br></br>
                  Made with React<br></br>
                  Career Portfolio<br></br> 
              </small></p>
              <p><small>
                <br></br>
                Something coming soon!<br></br><br></br><br></br>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}