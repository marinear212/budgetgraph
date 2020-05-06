import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import EntryCreate from './EntryCreate';
import EntryList from './EntryList';
import EntryEdit from './EntryEdit';
import BudgetChart from './BudgetChart';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/edit/:id" render={props => <EntryEdit {...props} />} />
                <Route path="/">
                    <BudgetChart />
                    <EntryCreate />
                    <EntryList />  
                </Route>
            </Switch>             
        </BrowserRouter>                
    );
};

export default App;