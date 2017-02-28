import React from 'react';

export class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.object.isRequired
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}