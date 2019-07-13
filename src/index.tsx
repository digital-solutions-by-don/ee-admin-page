import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';

import 'semantic-ui-css/semantic.min.css';
import configureStore from "./store";

const store = configureStore();
const application = <Provider store={store}><App/></Provider>
const rootDocument = document.getElementById('root');

ReactDOM.render(application, rootDocument);