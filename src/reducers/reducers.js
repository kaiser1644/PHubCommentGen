import { actionNames } from '../actions/actions';

const preview = (state = {}, action) => {
    switch (action.type) {
        case actionNames.REFRESH_USER_NAME: {
            return { ...state, userName: action.data };
        }
        case actionNames.REFRESH_AVATAR: {
            return { ...state, avatarData: action.data };
        }
        case actionNames.REFRESH_COMMENT: {
            return { ...state, comment: action.data }
        }
        case actionNames.REFRESH_DAYS: {
            return { ...state, numDays: action.data }
        }
        default: {
            return state;
        }
    }
};

export default preview;