import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://scontent.fccu4-2.fna.fbcdn.net/v/t1.0-9/26993515_1837838506234617_7965556301594859631_n.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_ohc=rUSeXmscpZ0AX8gbqsu&_nc_ht=scontent.fccu4-2.fna&oh=fe3db60b0e2665b1a8fa86d3273b92ce&oe=5FC719F5"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Dev</h1>

            <hr/>
            <div className="banner-skills">
              <span>HTML/</span>  
              <span>CSS/</span> 
              <span>Bootstrap/</span> 
              <span>JavaScript/</span> 
              <span>React/</span> 
              <span>NodeJS/</span> 
              <span>Express/</span> 
              <span>SQL//</span> 
              <span>Python</span>
            </div> 

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/mayank-jhunjhunwala-a18baa15b/" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-linkedin" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Manku27" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-github" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="https://www.freecodecamp.org/fcc103497b5-6664-44d9-9224-5f5891dc1bbd" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Goodreads */}
          <a href="https://www.goodreads.com/user/show/80192069-mayank-jhunjhunwala" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-goodreads" aria-hidden="true" />
          </a>

        {/* Instagram */}
          <a href="https://www.instagram.com/mank.you.re.view" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-instagram" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
