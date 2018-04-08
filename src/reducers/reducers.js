import { actionNames } from '../actions/actions';

const preview = (state = {}, action) => {
    switch (action.type) {
        case actionNames.REFRESH_AVATAR: {
            return { ...state, avatarData: action.avatarData};
        }
        default: {
            return state;
        }
    }
};

export default preview;