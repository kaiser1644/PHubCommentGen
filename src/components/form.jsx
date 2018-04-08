import { connect } from "react-redux";
import React from 'react';

import { refreshAvatar } from "../actions/actions";
import Input from "./input";
import Preview from "./preview";

class Form extends React.Component {
    render() {
        return (
            <div>
                <Input name="input" onAvatarSelected={this.props.onAvatarSelected}/>
                <Preview name="preview" avatarData={this.props.avatarData}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.avatarData);
    return {
        avatarData: state.avatarData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAvatarSelected: (e) => {
            const input = e.target;
            const reader = new FileReader();
            reader.onload = (readerE) => {
                const avatarData = readerE.target.result;
                dispatch(refreshAvatar(avatarData));
            };
            reader.readAsDataURL(input.files[0]);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
