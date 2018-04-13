export const actionNames = {
    REFRESH_USER_NAME: "REFRESH_USER_NAME",
    REFRESH_AVATAR: "REFRESH_AVATAR",
    REFRESH_COMMENT: "REFRESH_COMMENT",
    REFRESH_DAYS: "REFRESH_DAYS"
};

export const refresh = (data, actionName) => {
    return {
        data,
        type: actionName
    }
}

