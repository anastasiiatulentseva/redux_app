import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import List from "./components/list";

ReactDOM.render(<List />, document.getElementById('root'));
registerServiceWorker();
