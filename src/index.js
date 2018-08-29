import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserInterface from './components/user-interface';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<UserInterface />, document.getElementById('root'));
registerServiceWorker();
