import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-mdl';

class ProjectCards extends Component {
	  render() {
	    return(
	    	<div className="projects-grid">
	          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
	            <CardTitle style={{color: 'yellow', background:"black"}} ><strong>{this.props.title}</strong></CardTitle>
	            <CardText>{this.props.text}</CardText>
	            <CardActions border>
	              <a href={this.props.glink} target="_blank" rel="noreferrer" className="gitlink"><i className="fa fa-github-square" aria-hidden="true" /></a>
	            </CardActions>
	          </Card>
	          <br/><br/>
	        </div>
	    	)
		}
	}
export default ProjectCards;