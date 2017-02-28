import React from 'react';

export class HelloWorld extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            greeting: 'Hello'
        };
    }

    static propTypes = {
        name: React.PropTypes.string.isRequired
    };

    render() {
        return <h1> { this.state.greeting } { this.props.name } </h1>;
    }
}