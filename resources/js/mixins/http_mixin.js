export default {
    data() {
        return {
            formData: {},
            SelectFilter: {},
            filter: {},
            per_page: 20,
            formImages: '',
        }
    },
    methods: {
        onFileSelected: function (event, fieldIndex) {
            let file = event.target.files[0];
            let reader = new FileReader();
            reader.onload = (e) => {
                this.imageData[fieldIndex] = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        getGeneralData: function ($array, callback = false) {
            const _this = this;

            _this.axios.post(_this.urlGenerate('api/general'), $array).then(response => {
                $.each(response.data.result, function (index, value) {
                    _this.$set(_this.requiredData, index, value);
                    // _this.$store.commit('requiredData', response.data.result);
                });

                if (typeof callback === 'function') {
                    callback(response.data.result);
                }

            }).catch(function (error) {
                _this.$store.commit('httpRequest', false);
                _this.$toastr('error', 'Whoops..!! something went wrong', 'Error');
            });
        },
        getData: function (url, method = 'get', params = {}, data = {}, callback = false) {
            const _this = this;
            _this.axios({
                method: method,
                url: url,
                params: params,
                data: data
            }).then(response => {
                if (parseInt(response.data.status) === 5001) {
                    _this.$toastr(response.data.type, response.data.message, response.data.type);
                    _this.$router.push({path: '/admin/dashboard'});
                    return;
                }
                if (parseInt(response.data.status) === 5000) {
                    _this.$toastr(response.data.type, response.data.message, response.data.type);
                    return;
                }

                if (parseInt(response.data.status) === 2000) {
                    if (response.data.message) {
                        _this.$toastr('success', response.data.message, 'Success');
                    }
                    if (typeof callback === 'function') {
                        callback(response.data.result);
                    } else {
                        _this.$store.commit('requiredData', response.data.result)
                    }
                } else {
                    _this.$toastr('success', response.data.message, 'Success');
                }

            }).catch(function (error) {
                _this.$store.commit('httpRequest', false);
                _this.$toastr('error', 'Whoops..!! something went wrong', 'Error');
            });
        },
        getDataList: function (page = 1, callback = false) {
            const _this = this;
            _this.$store.commit('currentPagination', page);

            var data_params = Object.assign(this.filter, _this.formFilter, {page: page});
            this.$store.commit('httpRequest', true);
            _this.axios({method: "get", url: _this.urlGenerate(), params: data_params})
                .then(function (response) {
                    var retData = response.data;
                    _this.$store.commit('httpRequest', false);

                    if (parseInt(retData.status) === 5001) {
                        _this.$toastr('error', retData.message, 'Error');
                        _this.$router.push({path: '/admin/dashboard'});
                        return;
                    }
                    if (parseInt(retData.status) === 2000) {
                        _this.$store.commit('dataList', retData.result)
                    } else {
                        _this.$store.state.DataList = [];
                        _this.$toastr(retData.type, retData.message, 'Warning');
                    }
                    if (typeof callback === 'function') {
                        callback(retData.result);
                    }
                }).catch(function (error) {
                _this.$store.commit('httpRequest', false);
                var retData = error.response.data;
                _this.$toastr('error', retData.message, 'Error');
            });
        },
        changeStatus: function (obj = {}, showMessage = true) {
            const _this = this;
            this.$store.commit('httpRequest', true);
            _this.axios({method: "post", url: `${_this.urlGenerate()}/status`, data: obj})
                .then(function (response) {
                    _this.$store.commit('httpRequest', false);
                    _this.getDataList(_this.currentPagination);
                    if (showMessage) {
                        _this.$toastr(response.data.result, response.data.message, 'Success');
                    }
                }).catch(function (error) {
                _this.$store.commit('httpRequest', false);
                if (showMessage) {
                    var retData = error.response.data;
                    _this.$toastr('error', retData.message, 'Error');
                }
            });
        },
        onFileSelect(event, callback = false) {
            const _this = this;
            var formData = new FormData();
            var imagefile = event.target.files[0];
            formData.append("file", imagefile);

            _this.axios.post(_this.urlGenerate('api/file_upload'), formData)
                .then(response => {
                    if (parseInt(response.data.status) === 2000) {
                        if (typeof callback === 'function') {
                            return response.data.result;
                        }
                    } else {
                        _this.$toastr('error', response.data.message, 'Error');
                    }
                }).catch(function (error) {
                _this.$store.commit('httpRequest', false);
                _this.$toastr('error', 'Something wrong', 'Error');
            });
        },
        submitForm: function (formData, model = true, callback = false, checkValidation = true, url = false, object = {}) {
            const _this = this;
            var URL, method;
            var pageNumber = 1;
            if (_this.formType === 2) {
                pageNumber = _this.currentPagination;
                URL = `${_this.urlGenerate(url)}/${_this.updateId}`;
                method = 'put';
            } else {
                URL = _this.urlGenerate(url);
                method = 'post';
            }
            this.$validator.validate().then(valid => {
                if (valid || !checkValidation) {
                    this.$validator.errors.clear();
                    _this.$store.state.httpRequest = true;
                    _this.axios({method: method, url: URL, data: formData, params: object}).then(function (response) {
                        var retData = response.data;
                        _this.$store.state.httpRequest = false;

                        if (parseInt(retData.status) === 5001) {
                            _this.$toastr('error', retData.message, 'Error');
                            // _this.$router.push({path:'/admin/dashboard'});
                            return;
                        }

                        if (parseInt(retData.status) === 2000) {
                            if (model) {
                                _this.$store.state.currentFromModel = 1;
                                _this.closeModal(model);
                                _this.getDataList(pageNumber);
                                _this.resetForm(formData);
                            }
                            if (typeof callback == 'function') {
                                callback(retData.result);
                            }
                            _this.$toastr('success', retData.message, 'Success');
                        }
                        if (parseInt(retData.status) === 3000) {
                            _this.$toastr('warning', retData.message, 'Warning');
                            _this.assignValidationError(retData.result);
                        }
                        if (parseInt(retData.status) === 5000) {
                            _this.$toastr('error', retData.message, 'Error');
                        }
                    }).catch(function (error) {
                        _this.$store.commit('httpRequest', false);
                        _this.$toastr('error', 'Something Wrong', 'Error');
                    });
                }
            });
        },
        editData: function (data, updateId, model = 'formModal', callback = false) {
            const _this = this;
            _this.$store.commit('formObject', data);
            _this.$store.commit('updateId', updateId);
            _this.$store.commit('formType', 2);

            if (model) {
                _this.openModal(model);
            }
            if (typeof callback == 'function') {
                callback(data);
            }
        },
        deleteInformation: function (index, ID, url = false, callback = false, callDataList = true) {
            const _this = this;
            this.$swal({
                title: 'Are you sure..??',
                text: 'Data will be delete Permanently??',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: '<i class="fa fa-check"></i>',
                cancelButtonText: '<i class="fa fa-close"></i>',
                showCloseButton: true,
            }).then((result) => {
                if (result.value) {
                    var URL = !url ? `${_this.urlGenerate()}/${ID}` : url;
                    _this.axios.delete(URL)
                        .then(function (response) {
                            var retData = response.data;
                            _this.$store.commit('httpRequest', false);
                            if (parseInt(retData.status) === 2000) {
                                _this.$toastr('success', retData.message, 'Success');
                                if (callDataList) {
                                    _this.getDataList();
                                }
                                if (typeof callback == 'function') {
                                    callback(true);
                                }
                            } else {
                                _this.$toastr('warning', retData.message, 'Warning');
                            }
                        }).catch(function (error) {
                        _this.$store.commit('httpRequest', false);
                        _this.$toastr('error', 'Something Wrong', 'Error');
                    });
                }
            });
        },
        getConfigurations: function (callback = null) {
            const _this = this;
            this.$store.commit('httpRequest', true);
            _this.axios({method: "post", url: _this.urlGenerate('api/configurations')})
                .then(function (response) {
                    _this.$store.commit('httpRequest', false);
                    if (parseInt(response.data.status) === 2000) {
                        _this.$store.commit('Config', response.data.result);
                        if (typeof callback === 'function') {
                            callback(response.data.result);
                        }
                    }
                }).catch(function (error) {
                _this.$store.commit('httpRequest', false);
                var retData = error.response.data;
                _this.$toastr('error', retData.message, 'Error');
            });
        },
        UploadImage: function (event, imageObject, dataModel = null, callback = false) {
            const _this = this;
            const trigger = $(event.target);
            let input = event.target.files[0];
            let formData = new FormData();
            formData.append("type", 1);
            formData.append("file_type", 1);
            formData.append("file", input);
            const URL = _this.urlGenerate('api/file_upload');
            _this.$store.commit('httpRequest', true);
            _this.axios.post(URL, formData).then((response) => {
                _this.$store.commit('httpRequest', false);
                if (parseInt(response.data.status) === 2000) {
                    this.$set(imageObject, dataModel, response.data.result);
                    if (typeof callback === 'function') {
                        callback(true);
                    }
                } else if (parseInt(response.data.status) === 3000) {
                    _this.$toastr('error', response.data.message, 'Error');
                }
            }).catch(function () {
                _this.$store.commit('httpRequest', false);
            });
        },

    },
}
