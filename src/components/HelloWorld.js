import React from 'react';

export class HelloWorld extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            greeting: 'Hello'
        };
    }

    onClickHandler(e) {
        this.setState((prevState, props) => ({
            'greeting': prevState.greeting == 'Hello' ? 'Bye' : 'Hello'
        }));
    }

    static propTypes = {
        name: React.PropTypes.string.isRequired
    };

    render() {
        return <h1 onClick={ this.onClickHandler.bind(this) }> { this.state.greeting } { this.props.name } </h1>;
    }
}