export const actionNames = {
    REFRESH_AVATAR: "REFRESH_AVATAR"
};

export const refreshAvatar = (avatarData) => {
    return {
        type: actionNames.REFRESH_AVATAR,
        avatarData
    }
};
