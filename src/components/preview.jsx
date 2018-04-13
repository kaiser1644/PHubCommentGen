import React from 'react';

export default class Preview extends React.Component {
    render() {
        return (
            <div className="preview container">
                <div className="avatar" ref={this.avatar}>
                    <img src={this.props.avatarData} alt="Avatar preview..." id="imgAvatar" />
                </div>
                <div id="divUserName" className="userName">
                    <label id="lblUserName">{this.props.userName}</label>
                </div>
                <div id="divDate" className="date">
                    {this.props.numDays} days ago
                </div>
                <div id="divComment" className="comment">
                    {this.props.comment}
                    <div id="actionButtonss"></div>
                </div>
            </div>
        );
    }
}
