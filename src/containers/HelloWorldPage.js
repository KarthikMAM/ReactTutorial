import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

//import actions
import {
    toggleGreeting,
    updateName
} from '../actions';

//import the dumb components
import { HelloWorld } from '../components';

class HelloWorldPage extends React.Component {

    static propTypes = {
        name: React.PropTypes.string,
        greeting: React.PropTypes.string,
        toggleGreeting: React.PropTypes.func,
        updateName: React.PropTypes.func
    }

    componentWillMount() {
        this.props.updateName(this.props.params.name || 'World');
    }

    render() {
        return <HelloWorld
                    name={ this.props.name }
                    greeting={ this.props.greeting }
                    toggleGreeting={ this.props.toggleGreeting }
                    updateName={ newName => this.props.updateName(newName) } 
                 />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.name,
        greeting: state.greeting
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleGreeting: bindActionCreators(toggleGreeting, dispatch),
        updateName: bindActionCreators(updateName, dispatch)
    }
}

const connectedContainer = connect(mapStateToProps, mapDispatchToProps)(HelloWorldPage);
export {connectedContainer as HelloWorldPage}