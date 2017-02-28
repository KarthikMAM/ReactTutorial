import React from 'react';
import ReactDOM from 'react-dom';

//React dumb components
import { 
    HelloWorld
} from './components';

ReactDOM.render(
    <HelloWorld name="Karthik" />,
    document.getElementById('root')
)