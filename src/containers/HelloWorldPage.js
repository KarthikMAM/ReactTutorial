import React from 'react';

//import actions
import {
    toggleGreeting,
    updateName
} from '../actions';

//import the dumb components
import {
    HelloWorld
} from '../components';

export class HelloWorldPage extends React.Component {
    constructor(props) {
        super(props);

        this.updateName = this.updateName.bind(this);
        this.toggleGreeting = this.toggleGreeting.bind(this);
    }

    componentWillMount() {
        let {store} = this.context;
        store.dispatch(updateName(this.props.params.name || 'World'));
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    static contextTypes = {
        store: React.PropTypes.object
    }

    toggleGreeting() {
        let {store} = this.context;

        store.dispatch(toggleGreeting());
    }

    updateName(newName) {
        let {store} = this.context;

        store.dispatch(updateName(newName));
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