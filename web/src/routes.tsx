import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OrphagesMap from './pages/OrphanagesMap';
import Orphage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Landing } />
                <Route path="/app" component={ OrphagesMap } />

                <Route path="/orphanages/create" component={ CreateOrphanage } />
                <Route path="/orphanages/:id" component={ Orphage } />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;