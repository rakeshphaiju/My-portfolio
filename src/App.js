import React, { Component } from 'react';
import './App.css';
import { Layout, Header,Navigation,Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title="PORTFOLIO" scroll>
              <Navigation>
                  <Link to="/">HOME</Link>
                  <Link to="/projects">PROJECTS</Link>
                  <Link to="/contact">CONTACT</Link>
              </Navigation>
          </Header>
          <Drawer title="PORTFOLIO">
              <Navigation>
                <Link to="/">HOME</Link>
                <Link to="/projects">PROJECTS</Link>
                <Link to="/contact">CONTACT</Link>
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
