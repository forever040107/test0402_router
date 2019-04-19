import React from 'react'
import { render } from 'react-dom'
import { Router } from "react-router";
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';
import { createStore } from 'redux'
import toggle from './reducers'
import App from './components/App'


const store = createStore(
    toggle, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  
const history = createBrowserHistory()
  
render(
<Provider store={store}>
    <Router history={history}>
        <App />
    </Router>
</Provider>, document.getElementById('root'));