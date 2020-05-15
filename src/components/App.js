import React from 'react';
import '../sass/styles.sass';

import EntryCreate from './EntryCreate';
import EntryList from './EntryList';
import BudgetChart from './BudgetChart';

const App = () => {
    return (
        <div className="container">
            <div className="box is-shadowless">
                <BudgetChart />
                <EntryCreate />
                <EntryList />  
            </div>
        </div>
                    
    );
};

export default App;