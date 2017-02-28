import React from 'react';

//import constants
import {
    UPDATE_NAME,
    TOGGLE_GREETING
} from '../constants';

//import the dumb components
import {
    HelloWorld
} from '../components';

export class HelloWorldPage extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     greeting: 'Hello'
        // };

        this.updateName = this.updateName.bind(this);
        this.toggleGreeting = this.toggleGreeting.bind(this);
    }

    componentWillMount() {
        // this.setState({name: this.props.params.name || 'World'})

        let {store} = this.context;
        store.dispatch({type: UPDATE_NAME, name: this.props.params.name || 'World'})
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    static contextTypes = {
        store: React.PropTypes.object
    }

    toggleGreeting() {
        // this.setState((prevState, props) => ({
        //     greeting: prevState.greeting === 'Hello' ? 'Bye' : 'Hello'
        // }));
        let {store} = this.context;

        store.dispatch({type: TOGGLE_GREETING});
    }

    updateName(newName) {
        // this.setState({
        //     name: newName
        // });

        let {store} = this.context;

        store.dispatch({
            type: UPDATE_NAME,
            name: newName
        });
    }

    render() {
        const {store} = this.context;
        let state = store.getState();

        return <HelloWorld
                    name={ state.name }
                    greeting={ state.greeting }
                    toggleGreeting={ this.toggleGreeting }
                    updateName={ this.updateName } 
                 />
    }
}