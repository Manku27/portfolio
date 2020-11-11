import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://scontent.fccu4-2.fna.fbcdn.net/v/t1.0-9/26993515_1837838506234617_7965556301594859631_n.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_ohc=ivbtsQXibUwAX9e8ZIR&_nc_ht=scontent.fccu4-2.fna&oh=8ccfd3c4a35b3ff2a59dfdf0cc069496&oe=5FD2F775"
                alt="avatar"
                style={{height: '300px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Mayank Jhunjhunwala</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>A fresher trying to navigate.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Hometown</h5>
            <p>Raniganj, W.B., India</p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2016}
              endYear={2020}
              schoolName="Jadavpur University"
              schoolDescription="Electrical Engineer"
               />

               <Education
                 startYear={2014}
                 endYear={2016}
                 schoolName="Shiv Jyoti Sr. Secondary School, KOTA"
                 
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
                <Skills
                  skill="Javascript"
                />
                <Skills
                  skill="HTML/CSS" 
                />
                <Skills
                  skill="NodeJS" 
                />
                <Skills
                  skill="Express"
                />
                <Skills
                  skill="React"
                />
                <Skills
                  skill="Python"
                />

              <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Certificates</h2>  
              <p>
              <a href="https://www.freecodecamp.org/certification/fcc103497b5-6664-44d9-9224-5f5891dc1bbd/responsive-web-design" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-free-code-camp" aria-hidden="true" /></a>
              Responsive Web Design Developer Certification</p>
              <p>
              <a href="https://freecodecamp.org/certification/fcc103497b5-6664-44d9-9224-5f5891dc1bbd/javascript-algorithms-and-data-structures" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-free-code-camp" aria-hidden="true" /></a>
              JavaScript Algorithms and Data Structures</p>
              <p>
              <a href="https://freecodecamp.org/certification/fcc103497b5-6664-44d9-9224-5f5891dc1bbd/front-end-libraries" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-free-code-camp" aria-hidden="true" /></a>
              Front End Libraries</p>
              <p>
              <a href="https://www.youracclaim.com/badges/f9470406-3d3b-43b9-8a49-cfdf351ccbce?source=linked_in_profile" rel="noopener noreferrer" target="_blank">
              <span class="iconify" data-icon="simple-icons:cisco" data-inline="false"/>
              </a>Introduction to IoT</p>
              <p>
              <a href="https://www.youracclaim.com/badges/bf6bb544-a022-4916-8b78-11316cea47d8?source=linked_in_profile" rel="noopener noreferrer" target="_blank">
              <span class="iconify" data-icon="simple-icons:cisco" data-inline="false"/>
              </a>Introduction to Cybersecurity</p>
              <p>
              <a href="https://www.youracclaim.com/badges/29c8b72a-2235-4c27-8942-e584529d4700?source=linked_in_profile" rel="noopener noreferrer" target="_blank">
              <span class="iconify" data-icon="simple-icons:cisco" data-inline="false"/>
              </a>Cybersecurity Essentials</p>

              <p>
              <a href="https://www.hackerrank.com/certificates/d804349d6d8b" rel="noopener noreferrer" target="_blank">
              <i className='fab fa-hackerrank' />
              </a>Python (Basic) Certificate</p>
              <p>
              <a href="https://www.hackerrank.com/certificates/fb7a5656d641" rel="noopener noreferrer" target="_blank">
              <i className='fab fa-hackerrank' />
              </a>Python (Intermediate)</p>
              <p>
              <a href="https://www.hackerrank.com/certificates/60283e50fa64" rel="noopener noreferrer" target="_blank">
              <i className='fab fa-hackerrank' />
              </a>SQL (BASIC)</p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
