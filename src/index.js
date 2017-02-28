import React from 'react';
import ReactDOM from 'react-dom';

//React smart components, otherwise called containers
import { 
    HelloWorldPage
} from './containers';

ReactDOM.render(
    <HelloWorldPage />,
    document.getElementById('root')
)