export const mutations = {
    modalTitle(state, title) {
        state.modalTitle = title;
    },
    formObject(state, object) {
        state.formObject = object;
    },
    formFilter(state, object) {
        state.formFilter = object;
    },
    formType(state, type) {
        state.formType = type;
    },
    dataList(state, data) {
        state.dataList = data;
    },
    updateId(state, id) {
        state.updateId = id;
    },
    Config(state, data) {
        state.Config = data;
    },
    Permissions(state, data) {
        state.Permissions = data;
    },
    resetFilter(state, data) {
        state.filter = data;
    },
    httpRequest(state, data) {
        state.httpRequest = data;
    },
    requiredData(state, data) {
        state.requiredData = data;
    },
    currentPage(state, data) {
        state.currentPage = data;
    },

    currentPagination(state, data) {
        state.currentPagination = data;
    },

    // Notification management=====

    Notifications(state, data) {
        state.Notifications.push(data);
    },
    NotificationIds(state, data) {
        state.NotificationIds.push(data);
    },

    EmptyNotifications(state, data) {
        state.Notifications = [];
    },
    EmptyNotificationIds(state, data) {
        state.NotificationIds = [];
    },

    DesktopNotifications(state, data) {
        state.DesktopNotifications.push(data);
    },
    DesktopNotificationIds(state, data) {
        state.DesktopNotificationIds.push(data);
    },
    EmptyDesktopNotifications(state, data) {
        state.DesktopNotifications = [];
    },
    EmptyDesktopNotificationIds(state, data) {
        state.DesktopNotificationIds = [];
    },

}
