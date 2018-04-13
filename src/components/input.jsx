import React from 'react';
import classNames from 'classnames';

export default class Input extends React.Component {
    render() {
        return (
                <form id="frmMain">
                    <div className="formRow">
                        <label htmlFor="inputUserName" className={classNames("col-form-label-sm")}>Enter user name:</label>
                        <input 
                            type="text" 
                            className={classNames("form-control-sm", "form-control")} 
                            id="inputUserName" 
                            placeholder="Chuck Norris"
                            onChange={this.props.onUserNameChanged}
                        />
                    </div>
                    <div className="formRow">
                    <label htmlFor="inputAvatar" className={classNames("col-form-label-sm")}>Choose avatar:</label>
                        <label className={classNames("btn", "btn-secondary", "btn-file", "btn-sm")}>
                            Browse
                            <input 
                                accept="image/*"
                                type="file"
                                id="inputAvatar" 
                                aria-describedby="fileHelp"
                                onChange={this.props.onAvatarSelected}
                                hidden
                            />
                        </label>
                    </div>
                    <div className="formRow">
                        <label htmlFor="inputComment" className={classNames("col-form-label-sm")}>Enter comment:</label>
                        <textarea 
                            className={classNames("form-control-sm", "form-control")} 
                            id="inputComment" 
                            placeholder="Chuck Norris"
                            onChange={this.props.onCommentChanged}
                        />
                    </div>
                    <div className="formRow">
                        <label htmlFor="inputDays" className={classNames("col-form-label-sm")}>Enter number of days:</label>
                        <input 
                            type="number" 
                            className={classNames("form-control-sm", "form-control")} 
                            id="inputDays"
                            onChange={this.props.onDaysChanged} 
                        />
                    </div>
                </form>
        );
    }
}
