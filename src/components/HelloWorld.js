import React from 'react';
import { GreetingText } from './GreetingText';
import { NameInput } from './NameInput';

export class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <NameInput />
                <GreetingText name="Karthik" />
            </div>
        );
    }
}