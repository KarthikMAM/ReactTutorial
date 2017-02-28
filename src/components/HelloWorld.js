import React from 'react';

export class HelloWorld extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            greeting: 'Hello',
            name: 'Karthik'
        };
    }

    onClickHandler(e) {
        this.setState((prevState, props) => ({
            greeting: prevState.greeting === 'Hello' ? 'Bye' : 'Hello'
        }));
    }

    onChangeHandler(e) {
        this.setState({
            name: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={ this.onChangeHandler.bind(this) } />
                <h1 onClick={ this.onClickHandler.bind(this) }> { this.state.greeting } { this.state.name } </h1>
            </div>
        );
    }
}