import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardText ,CardActions, CardMenu, Button } from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects">
                <div className="projects-grid">
                 {/* Project 1 */}
                 <Card shadow={5} style={{width: 'auto', margin: '10px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(data:image/jpeg;base64,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) center / cover'}}>Photography Portfolio</CardTitle>
                    <CardText>
                       Web App for a photographer for posting the photographs. Based on React/Redux.
                    </CardText>
                    <CardActions border>
                    <Button href="https://github.com/rakeshphaiju/rameshsainju" target='_blank' colored>Github</Button>
                    <Button  href=" https://rameshsainju.netlify.app/" target='_blank' colored>Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card>
                 {/* Project 2 */}
                 <Card shadow={5} style={{width: 'auto', margin: '10px'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 
                    'url(https://miro.medium.com/max/903/1*05qdiMW9HZxqfEZ05hSRsg.png) center / cover'}}>Reservation system</CardTitle>
                    <CardText>
                        Web app for reservation of time slot from available time. It is based on React/Redux.
                    </CardText>
                    <CardActions border>
                    <Button href="https://github.com/rakeshphaiju/Reservation-application-frontend" target='_blank' colored>Github</Button>
                   
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card>
                {/* Project 3 */}
                <Card shadow={5} style={{width: 'auto', margin: '10px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(data:image/png;base64,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) center / cover'}}>Rental application</CardTitle>
                     <CardText>
                        This is web application for renting a vehicle. It is based on php web framework (codeigniter).
                    </CardText>
                    <CardActions border>
                    <Button href="https://github.com/rakeshphaiju/phpframework" target='_blank' colored>Github</Button>
                    <Button  href="http://www.students.oamk.fi/~t4phra00/php_project/" target='_blank' colored>Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card>
                </div>
                <div className="projects-grid">
                 {/* Project 4 */}
                <Card shadow={5} style={{width: 'auto', margin: '10px'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 
                    'url(http://www.interactive-ip.eu/index.dhtml/docs/interactIVe_logo_co.jpg) center / cover'}}>Interactive multimedia</CardTitle>
                    <CardText>
                        This is application based on interactive multimedia programming course.
                    </CardText>
                    <CardActions border>
                    <Button href="https://github.com/rakeshphaiju/interactive_multi" target='_blank' colored>Github</Button>
                    <Button href= "https://imp-rak.herokuapp.com/" target='_blank' colored>Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card>

                 {/* Project 5 */}
                <Card shadow={5} style={{width: 'auto', margin: '10px'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 
                    'url(https://cdn-images-1.medium.com/max/1200/1*nC94XZXcbKJQVF1vhj30nQ.png) center / cover'}}>Django app</CardTitle>
                    <CardText>
                        This is web application based on python or django rest framework.
                    </CardText>
                    <CardActions border>
                    <Button href= "https://github.com/rakeshphaiju/QuickIT" target='_blank' colored>Github</Button>
                    
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card>
            
                </div>
                </div>
              )
        }else if(this.state.activeTab === 1){
            return(
                <div><h1>This is empty</h1></div>
            )
        }
    }

   

    render() {
        return(
            <div className="category-tab">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab> My Projects</Tab>
                </Tabs>

                
                    <Grid >
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                
        
                
            </div>
        )
    }
}

export default Projects;