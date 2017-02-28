import React from 'react';

export class GreetingText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            greeting: 'hello'
        }

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    static propTypes = {
        name: React.PropTypes.string.isRequired
    }

    onClickHandler(e) {
        this.setState((prevState, props) => ({
            greeting: prevState.greeting == 'bye' ? 'hello' : 'bye'
        }))
    }

    render() {
        return <h1 onClick={this.onClickHandler} > { this.state.greeting } { this.props.name } </h1>;
    }
}