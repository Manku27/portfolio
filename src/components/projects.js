import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import ProjectCards from "./projectcard";
import {pythtarr, reactarr} from "./projectlist";


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }



  toggleCategories() {

    if(this.state.activeTab === 0){
      return(<div className="project-div">{reactarr.map((user,i) => <ProjectCards  title={reactarr[i].title} text={reactarr[i].text} glink={reactarr[i].glink}/>)}</div>);
    } else if(this.state.activeTab === 1) {
        return(<div className="project-div">{pythtarr.map((user,i) => <ProjectCards  title={pythtarr[i].title} text={pythtarr[i].text} glink={pythtarr[i].glink}/>)}</div>);
    }
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Python</Tab>
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

export default Projects;
