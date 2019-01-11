import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import Resume from './resume';
import Aboutme from './aboutme';
import Projects from './projects';
import Contact from './contact';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Main;