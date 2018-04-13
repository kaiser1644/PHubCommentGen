import React from 'react';
import ReactDOM from 'react-dom';

import Form from './components/form';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/reducers';

import 'bootstrap';
import './styles/main.scss';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store = {store}>
        <Form />
    </Provider>,
    document.getElementById('main')
);
