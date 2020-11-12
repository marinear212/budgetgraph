import React, { Fragment } from 'react';
import '../sass/styles.sass';

import EntryCreate from './EntryCreate';
import EntryList from './EntryList';
import BudgetChart from './BudgetChart';

const App = () => {
    return (
        <Fragment>
            <section className="section" style={{backgroundColor: 'lightgray'}}>
                <div className="container">
                        <h1 className="title">Budgetgraph</h1>
                </div>
            </section>
            <section className="section" style={{backgroundColor: 'lightgray'}}>
                <div className="container">
                    <BudgetChart />
                    <div className="box is-shadowless">
                        <EntryCreate />
                        <EntryList />  
                    </div>
                </div>
            </section>
        </Fragment>          
    );
};

export default App;