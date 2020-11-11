import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>

            {/*mario*/}
            <div className="sky">
  <div className="scorebar">
    <p><span className="topline-mario">MANKU</span>
      <span className="topline-world">WORLD</span>
      
      <span className="bottomline-score">OOOOOO</span>
      <span className="bottomline-coin"><img src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/Coin.gif" height="40px"/> x OO</span>
      <span className="bottomline-world">1 - 1</span>
      
    </p>
  </div>
  <img className="cloud" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/CloudSingle.gif"/>
  <img className="cloud" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/CloudDouble.gif"/>
  <img className="cloud" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/CloudTriple.gif"/>
</div>
<div className="ground">
  <img className="bush" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/BushSingle.gif" height="70px;"/>
  <img className="bush" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/BushDouble.gif" height="70px;" />
  

  <div className="mario"></div>

</div>

            {/*mario*/}



            

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
            <hr/>
            <br/>
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
