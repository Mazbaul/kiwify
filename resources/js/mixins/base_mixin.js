import {printPage} from '../plugins/print_div';

export default {
    data() {
        return {
            baseUrl: baseUrl,
            sortData: [],
            sortable: false,
            perPages : [5,10,20,30,40,50,100,200]
        }
    },
    watch: {
        'errors': {
            handler: function (value) {
                const _this = this;
                var is_invalid = $('.is-invalid');
                $(is_invalid).removeAttr("title", '');
                $(is_invalid).removeClass('is-invalid');
                $('.error_message').remove();
                if (value.items.length > 0) {
                    value.items.forEach(function (val) {
                        var target = $("[name='" + val.field + "']");
                        if ($('.is-invalid').length == 0) {
                            $(target).parent().remove(`#${val.field}_message`);
                        }
                        var message = _this.replaceString(val.msg, val.field);
                        if ($(`#${val.field}_message`).length == 0) {
                            $(target).parent().append(`<span style="color:red" class="error_message" id="${val.field}_message">${message}</span>`);
                        }
                        $(target).addClass('is-invalid');
                        $(target).attr("title", message.replace(val.field, ""));
                    });
                }
            },
            deep: true
        },
        '$store.getters.httpRequest': function () {
            if (this.httpRequest) {
                $('.main-content button').attr('disabled', 'disabled');
                $('.main-content input').attr('disabled', 'disabled');
            } else {
                $('.main-content button').removeAttr('disabled');
                $('.main-content input').removeAttr('disabled');
            }
        },
        '$route.path': function () {
            this.assignCurrentAccess();
        }
    },
    computed: {
        formType: function () {
            return this.$store.getters.formType;
        },
        formObject: function () {
            return this.$store.getters.formObject;
        },
        formFilter: function () {
            return this.$store.getters.formFilter;
        },
        dataList: function () {
            return this.$store.getters.dataList;
        },
        updateId: function () {
            return this.$store.getters.updateId;
        },
        httpRequest: function () {
            return this.$store.getters.httpRequest;
        },
        requiredData: function () {
            return this.$store.getters.requiredData;
        },
        modalTitle: function () {
            return this.$store.getters.modalTitle;
        },
        Config: function () {
            return this.$store.getters.Config;
        },
        Permissions: function () {
            if (this.$store.getters.Config.permissions !== undefined
                && this.$store.getters.Config.permissions != null){
                return this.$store.getters.Config.permissions;
            }
            return [];
        },
        currentPage: function () {
            return this.$store.getters.currentPage;
        },
        Notifications: function () {
            return this.$store.getters.Notifications;
        },
        NotificationIds: function () {
            return this.$store.getters.NotificationIds;
        },

        DesktopNotifications: function () {
            return this.$store.getters.DesktopNotifications;
        },
        DesktopNotificationIds: function () {
            return this.$store.getters.DesktopNotificationIds;
        },

        Messages: function () {
            return this.$store.getters.Messages;
        },
        currentPagination: function () {
            return this.$store.getters.currentPagination;
        },
        software: function () {
            if (localStorage.getItem('software') !== undefined && localStorage.getItem('software') !== null) {
                return localStorage.getItem('software');
            }
        }

    },
    methods: {
        printData: function (div_id = 'printDiv') {
            printPage("#" + div_id);
        },
        routePush: function (path) {
            this.$router.push({path: path})
        },
        assignCurrentAccess: function () {
            // const _this = this;
            // var path = this.$route.path;
            // var currentPage = {};
            //
            // $.each(_this.Config.menus, function (index, each) {
            //     if (path == each.link) {
            //         currentPage = each;
            //     } else {
            //         $.each(each.submenus, function (index, eachSub) {
            //             if (path == eachSub.link) {
            //                 currentPage = eachSub;
            //             }
            //         });
            //     }
            // });
            // _this.$store.commit('currentPage', currentPage);

        },

        can: function (role) {
            const _this = this;
            if ((_this.Permissions !== null && _this.Permissions.length > 0)
                && _this.Permissions.includes(role)) {
                return true;
            }
            return false;
        },
        showData(dataArray, fieldName) {
            if ((dataArray !== null && dataArray !== undefined)
                && (dataArray[fieldName] !== undefined && dataArray[fieldName] !== null)) {
                return dataArray[fieldName];
            } else {
                return '-';
            }
        },
        getConfig: function (Obj, name) {
            if ((Obj !== undefined && Obj !== null !== null) &&
                (Obj[name] !== undefined && Obj[name] !== null)) {
                return Obj[name];
            } else {
                return '';
            }
        },
        openModal: function (modalName = 'formModal', title = false, callback = false, resetValidation = true, defaultObject = {}) {
            const _this = this;

            if (title) {
                this.$store.commit('modalTitle', title);
            }
            $('#' + modalName).modal('show');

            if (resetValidation){
                this.$validator.reset();
            }

            $.each(defaultObject, function (index, value) {
                _this.$set(_this.formObject, index, value);
            });

            if (typeof callback === 'function') {
                callback(true);
            }
        },
        closeModal: function (modalName = 'createModal', resetForm = true, resetFormType = true) {
            const _this = this;
            this.$validator.reset();
            $('#' + modalName).modal('hide');
            this.$store.commit('formType', 1);
            $('.error_message').remove();
            $('.is-invalid').removeClass('is-invalid');
            if (resetForm) {
                this.$store.commit('formObject', {});
            }
            if (resetFormType) {
                _this.$store.state.formType = 1;
            }
        },
        getUrl: function () {
            if (this.$route.meta.dataUrl !== undefined) {
                return this.$route.meta.dataUrl;
            }
            return '';
        },
        urlGenerate: function (customUrl = false) {
            var url = '';
            if (customUrl) {
                url = `${baseUrl}/${customUrl}`;
            } else {
                url = `${baseUrl}/${this.getUrl()}`;
            }
            return url;
        },
        assignValidationError: function (errors) {
            const _this = this;
            $.each(errors, function (index, errorValue) {
                _this.$validator.errors.add({
                    id: index,
                    field: index,
                    name: index,
                    msg: errorValue[0],
                });
            })
        },
        resetForm: function (formData) {
            if (typeof formData == 'object') {
                Object.keys(formData).forEach(function (key) {
                    formData[key] = '';
                });
                return formData;
            }
        },
        pageTitle: function () {
            return this.$route.meta.pageTitle;
        },
        resetFilter: function (parameter = []) {
            this.$store.commit('resetFilter', parameter);
            this.getDataList();
        },
        clickImageInput: function (ID) {
            $('#' + ID).click();
        },
        getImage: function (imagePath = null, alternative = false) {
            if (imagePath !== undefined && imagePath !== '' && imagePath !== null) {
                return `${UploadPath}/${imagePath}`;
            }
            if (alternative){
                return `${publicPath}/${alternative}`;
            }
        },
        getUpload: function (filePath) {
            if (filePath !== undefined && filePath !== '') {
                return `${UploadPath}/${filePath}`;
            }
        },
        indexToLabel: function (string) {
            var removed_space = '';
            if (typeof string === 'string') {
                removed_space = string.replace(/_/g, ' ');
                if (typeof removed_space !== 'string') {
                    return index;
                }
                return removed_space.charAt(0).toUpperCase() + removed_space.slice(1)
            }
            return '';
        },
        addRow: function (object, pushEr) {
            if (typeof object === 'object') {
                object.push(pushEr);
            }
        },
        deleteRow: function (object, index) {
            object.splice(index, 1);
        },
        arrLength : function(array){
            if (array.length !== undefined){
                return array.length;
            }
            return 0;
        },
        openFile: function (url, filename) {
            var newwindow;
            var height = parseInt(window.innerHeight) - 100;
            var width = parseInt(window.innerWidth) - 250;
            newwindow = window.open(url, filename, `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=${width},height=${height},left=100,top=100`);

            if (window.focus) {
                newwindow.focus()
            }
            return false;
        },

        playSound : function(url){
            var audio = document.createElement('audio');
            audio.style.display = "none";
            audio.src = url;
            audio.autoplay = true;
            audio.onended = function () {
                audio.remove()
            };
            document.body.appendChild(audio);
        },
        showStatus: function (status, activeText="Active", inactiveText="InActive") {
            console.log('in base file')
            if (parseInt(status) === 1) {
                return `<span class="badge badge-soft-success">${activeText}</span>`;
            }

            return `<span class="badge badge-soft-danger">${inactiveText}</span>`;
        },
        startSortable: function () {
            const _this = this;
            if (_this.sortable) {
                _this.sortable = false;
                $("#sortable").sortable("disable");
                _this.$toastr('warnung', 'Sorting DeActivated', 'Information');
                return;
            }
            _this.sortable = true;
            _this.$toastr('warning', 'Sorting Activated, now you can Chnage The list', 'Information');

            $("#sortable").sortable({
                update: function (event, ui) {
                    _this.sortData = [];
                    let product_list = $(".sort_each");
                    $.each(product_list, function (index, value) {
                        _this.sortData.push({
                            id: $(value).attr("data-id"),
                            sort_id: index + 1
                        });
                    });
                    _this.changeStatus({
                        sorts: _this.sortData,
                        type: 'sort',
                    }, false)
                }
            });
        },
        updateSortable: function (trigger) {
            let data = [];
            NewArray = [];
            let product_list = $(".sort_product-each");
            product_list.each(function (index, value) {
                let rv = {
                    id: $(value).attr("data_product_id"),
                    sort_id: (index + 1)
                };
                NewArray.push(rv)
            });
        },

        replaceString : function(string, name){
            if(string !== undefined && string !== null){
                return string.replace(name,' ');
            }

            return '';
        }
    },
}
