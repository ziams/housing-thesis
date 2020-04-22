import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import LangingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Information from './information';
import Dinformation from './3dinformation';
import Informationperior from './informationperior';
import Informationperior2 from './informationperior2';
import Informationperior3 from './informationperior3';
import Informationperior4 from './informationperior4';
import Addinformation from './addinformation';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LangingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/information" component={Information} />
        <Route path="/3dinformation" component={Dinformation} />
        <Route path="/informationperior1/:id" component={Informationperior2}/>
        <Route path="/informationperior1/" component={Informationperior}/>
        <Route path="/informationperior2/:id" component={Informationperior4}/>
        <Route path="/informationperior2/" component={Informationperior3}/> 
        <Route path="/add"component={Addinformation}/>
    </Switch>
)

export default Main;