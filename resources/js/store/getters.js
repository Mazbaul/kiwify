export const getters = {
    modalTitle(state) {
        return state.modalTitle;
    },
    formObject(state) {
        return state.formObject;
    },
    formFilter(state) {
        return state.formFilter;
    },
    formType(state) {
        return state.formType;
    },
    dataList(state) {
        return state.dataList;
    },
    updateId(state) {
        return state.updateId;
    },
    filter(state) {
        return state.filter;
    },
    httpRequest(state) {
        return state.httpRequest;
    },
    requiredData(state) {
        return state.requiredData;
    },
    Config(state) {
        return state.Config;
    },
    Permissions(state) {
        return state.Permissions;
    },
    Notifications(state) {
        return state.Notifications;
    },
    NotificationIds(state) {
        return state.NotificationIds;
    },

    DesktopNotifications(state) {
        return state.DesktopNotifications;
    },
    DesktopNotificationIds(state) {
        return state.DesktopNotificationIds;
    },

    currentPagination(state) {
        return state.currentPagination;
    },

    Messages(state) {
        return state.Messages;
    },
    user(state) {
        return state.currentUser !== null && state.currentUser !== undefined ? state.currentUser : {};
    },
};
