import React from 'react';

export class NameInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Karthik'
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({name: e.target.value});
    }

    render() {
        return <input type="text" onChange={ this.onChangeHandler } />
    }
}