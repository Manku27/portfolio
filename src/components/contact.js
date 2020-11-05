import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <div className="contact-grid">
          <div className="contact-left">
            <h2>Mayank Jhunjhunwala</h2>
            <img
              src="https://scontent.fccu4-1.fna.fbcdn.net/v/t1.0-9/17098661_1494348187250319_8033656166207042985_n.jpg?_nc_cat=101&ccb=2&_nc_sid=174925&_nc_ohc=LuFlk2xSODgAX8Wz6Nt&_nc_ht=scontent.fccu4-1.fna&oh=1c12a523a43d4bdbb874ba197defa3e9&oe=5FC9DA87"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am very enthusiastic about the ability of modern tech to solve real world problems.</p>
          </div>
          <div className="contact-right">
            <h2>Contact Me</h2>
            <hr/>
            <br/><br/>
            <div className="contact-list">
              <div>                 
                    7477367506  &nbsp;
                    <a href="tel:7477367506">
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                    </a>
                   
              </div>                   
              <div>
                    jjmayank98@gmail.com  &nbsp;
                    <a href="mailto:jjmayank98@gmail.com">
                      <i className="fa fa-envelope" aria-hidden="true"/>
                    </a>
                    
              </div>                      
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
