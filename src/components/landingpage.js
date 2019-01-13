import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import logo from '../../src/components/my-pic.jpg';


class Landing extends Component{
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className= "landing-grid">
                    <Cell col={12}>
                        <img
                            src={logo}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Software Developer</h1>
                            <hr/>

                        <p>HTML/CSS | Bootstrap | Javascript | React | Python | PHP | ASP.NET</p>
                    <div className="social-links">
                        {/*LinkedIn*/}
                        <a href="https://www.linkedin.com/in/rakesh-phaiju-34232bb6/" rel="nooperner noreferrer" target="_blank">
                            <i className="fab fa-linkedin " aria-hidden="true"></i>
                        </a>
                         {/*Github*/}
                        <a href="https://github.com/rakeshphaiju" rel="nooperner noreferrer" target="_blank">
                            <i className="fab fa-github "aria-hidden="true"></i>
                        </a>
                          {/*facebook*/}
                          <a href="https://www.facebook.com/rakesh.phaiju.9" rel="nooperner noreferrer" target="_blank">
                            <i className="fab fa-facebook "aria-hidden="true"></i>
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