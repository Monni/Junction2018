import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './Store/index';
import 'bootstrap/dist/css/bootstrap.css';
import {IntlProvider, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import fi from 'react-intl/locale-data/fi';

import {flattenMessages} from "./Constants/l18n/util";
import messages from './Constants/l18n/messages';
import LandingPage from "./Containers/Public/LandingPage/landingpage";
import {CONTROLS_PATH, DASHBOARD_PATH, LANDING_PAGE_PATH} from "./Constants/paths/local_paths";
import Dashboard from "./Containers/Private/Dashboard/dashboard";
import Controls from "./Containers/Private/Controls/controls";


addLocaleData([...en, ...fi]);

let locale = (navigator.languages && navigator.languages[0])
    || navigator.language
    || navigator.userLanguage
    || 'en-US';

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
                <Router>
                    <Switch>
                        <Route exact path={LANDING_PAGE_PATH} component={LandingPage}/>
                        <Route exact path={DASHBOARD_PATH} component={Dashboard}/>
                        <Route exact path={CONTROLS_PATH} component={Controls}/>
                    </Switch>
                </Router>
        </IntlProvider>
    </Provider>
    , document.getElementById('root'));
