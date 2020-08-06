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
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{width: 'auto', margin: '10px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(data:image/png;base64,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) center / cover'}}>Project</CardTitle>
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
                 {/* Project 2 */}
                <Card shadow={5} style={{width: 'auto', margin: '10px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(http://www.interactive-ip.eu/index.dhtml/docs/interactIVe_logo_co.jpg) center / cover'}}>Project</CardTitle>
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

                 {/* Project 3 */}
                <Card shadow={5} style={{width: 'auto', margin: '10px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(https://cdn-images-1.medium.com/max/1200/1*nC94XZXcbKJQVF1vhj30nQ.png) center / cover'}}>Project</CardTitle>
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