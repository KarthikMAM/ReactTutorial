import React from 'react';

//import the dumb components
import {
    HelloWorld
} from '../components';

export class HelloWorldPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            greeting: 'Hello'
        };

        this.updateName = this.updateName.bind(this);
        this.toggleGreeting = this.toggleGreeting.bind(this);
    }

    componentWillMount() {
        this.setState({name: this.props.params.name || 'World'})
    }

    toggleGreeting() {
        this.setState((prevState, props) => ({
            greeting: prevState.greeting === 'Hello' ? 'Bye' : 'Hello'
        }));
    }

    updateName(newName) {
        this.setState({
            name: newName
        });
    }

    render() {
        return <HelloWorld
                    name={ this.state.name }
                    greeting={ this.state.greeting }
                    toggleGreeting={ this.toggleGreeting }
                    updateName={ this.updateName } 
                 />
    }
}