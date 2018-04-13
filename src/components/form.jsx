import { connect } from "react-redux";
import React from 'react';
import classNames from 'classnames'

import {
    actionNames,
    refresh
} from "../actions/actions";
import Input from "./input";
import Preview from "./preview";

class Form extends React.Component {
    render() {
        return (
            <div className={classNames("container", "mainContainer")}>
                <div id="header">
                    <h1>Phub Comment Generator</h1>
                    <p className="help-block">Generate fake comment from your favorite website.</p>
                </div>
                <Input name="input"
                    onUserNameChanged={this.props.onUserNameChanged}
                    onAvatarSelected={this.props.onAvatarSelected}
                    onCommentChanged={this.props.onCommentChanged}
                    onDaysChanged={this.props.onDaysChanged}
                />
                <Preview 
                    name="preview"
                    userName={this.props.userName}
                    avatarData={this.props.avatarData}
                    comment={this.props.comment}
                    numDays={this.props.numDays}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.userName,
        avatarData: state.avatarData,
        comment: state.comment,
        numDays: state.numDays
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUserNameChanged: (e) => {
            const input = e.target;
            dispatch(refresh(input.value, actionNames.REFRESH_USER_NAME));
        },
        onAvatarSelected: (e) => {
            const input = e.target;
            const reader = new FileReader();
            reader.onload = (readerE) => {
                const avatarData = readerE.target.result;
                dispatch(refresh(avatarData, actionNames.REFRESH_AVATAR));
            };
            reader.readAsDataURL(input.files[0]);
        },
        onCommentChanged: (e) => {
            const input = e.target;
            dispatch(refresh(input.value, actionNames.REFRESH_COMMENT));
        },
        onDaysChanged: (e) => {
            const input = e.target;
            dispatch(refresh(input.value, actionNames.REFRESH_DAYS));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
