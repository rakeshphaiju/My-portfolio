import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import logo from '../../src/components/my-pic.jpg';
import resume from '../../src/components/resume.pdf'

class Contact extends Component{
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell className="contact-cv" col={6}>
                        <h2>Rakesh Phaiju</h2>
                        <img
                        src={logo}
                        alt="avatar"
                        style={{height: '250px'}}
                       />

                        <p style={{ width:'75%', margin: 'auto', paddingTop:'1em'}}>
                        Currently, I am studying Bachelor degree in Information Technology in Oulu
                        University of Applied Sciences, Oulu, Finland. Originally, i am from Nepal. Currently, 
                        i am looking for the internship or trainee position in any software development or 
                        web development field. You can also download my resume from
                        <a href={resume} target='_blank' rel="noopener noreferrer"> here</a>
                        
            
                        </p>
                        

                    </Cell>
                    <Cell className="contact-info" col={6}>
                        <h2>Contact Info</h2>
                        <hr/>

                    <div className="contact-list">
                         <List>
                            <ListItem>
                            <ListItemContent style ={{fontFamily:'Anton', fontSize:'25px' }}>
                            <i className="fa fa-phone-square" aria-hidden="true"/>(358) 465657745</ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent style ={{fontFamily:'Anton', fontSize:'25px' }}>
                            <i className="fas fa-envelope-square" aria-hidden="true"/>rakeshphaiju22@gmail.com</ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent style ={{fontFamily:'Anton', fontSize:'25px' }}>
                            <i className="fab fa-skype" aria-hidden="true"/>rakesh.phaiju</ListItemContent>
                            </ListItem>
                        </List>

                    </div>

                        
                        

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;