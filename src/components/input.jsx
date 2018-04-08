import React from 'react';

export default class Input extends React.Component {
    render() {
        return (
            <div id="inputSection" className="input">
                <input type="file" onChange={this.props.onAvatarSelected} id="inputAvatar"/>
                <input type="text" />
            </div>
        );
    }
}
