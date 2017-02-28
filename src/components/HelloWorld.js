import React from 'react';

export class HelloWorld extends React.Component {

    static propTypes = {
        name: React.PropTypes.string.isRequired,
        greeting: React.PropTypes.string.isRequired,
        updateName: React.PropTypes.func,
        toggleGreeting: React.PropTypes.func
    }

    render() {
        return (
            <div>
                <input type="text" onChange={ (e) => this.props.updateName(e.target.value) } value={ this.props.name } />
                <h1 onClick={ this.props.toggleGreeting }> { this.props.greeting } { this.props.name } </h1>
            </div>
        );
    }
}