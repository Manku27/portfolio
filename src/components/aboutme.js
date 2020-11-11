import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import Me from "./blog/me";
import School from "./blog/school";
import Uni from "./blog/uni";
import WebDev from "./blog/webdev";


class About extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }



  toggleCategories() {

    if(this.state.activeTab === 0){
      return(<div className="project-div"><Me/></div>);
    } else if(this.state.activeTab === 1) {
        return(<div className="project-div"><School/></div>);
    } else if(this.state.activeTab === 2) {
        return(<div className="project-div"><Uni/></div>);
    } else if(this.state.activeTab === 3) {
        return(<div className="project-div"><WebDev/></div>);
    }
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Me</Tab>
          <Tab>JEE</Tab>
          <Tab>Uni</Tab>
          <Tab>WebDev</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default About;
