import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title={<Link style={{fontWeight: "bold", color: 'white',textDecoration: "none"}} to="/portfolio"> HOME </Link>} scroll>
                <Navigation>
                    <Link to="/resume" style={{fontWeight: "bold"}} className="links-hover">Resume</Link>
                    <Link to="/aboutme" style={{fontWeight: "bold"}} className="links-hover">About Me</Link>
                    <Link to="/projects" style={{fontWeight: "bold"}} className="links-hover">Projects</Link>
                    <Link to="/contact" style={{fontWeight: "bold"}} className="links-hover">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/portfolio">Manku</Link>}>
                <Navigation>
                  <Link to="/resume" className="links-hover">Resume</Link>
                  <Link to="/aboutme" className="links-hover">About Me</Link>
                  <Link to="/projects" className="links-hover">Projects</Link>
                  <Link to="/contact" className="links-hover">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
