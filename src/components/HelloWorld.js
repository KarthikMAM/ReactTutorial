import React from 'react';

export class HelloWorld extends React.Component {

    static propTypes = {
        name: React.PropTypes.string.isRequired
    };

    render() {
        return <h1> Hello { this.props.name } </h1>;
    }
}