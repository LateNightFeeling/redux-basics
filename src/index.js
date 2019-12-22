import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import counter from './reducers/counter';
import result from './reducers/result';

const RootReducer = combineReducers({
    ctr: counter,
    res: result
});
const store = createStore(RootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
