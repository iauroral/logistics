/**
 * 公共服务
 */
angular
    .module('homer')
    .service('CommonService', function(sweetAlert) {
        var self = this;

        self.success = function(title, text) {
            if (angular.isUndefined(title)) {
                title = '操作成功';
            }
            if (angular.isUndefined(text)) {
                text = 'Everything is OK!';
            }
            sweetAlert.swal({
                title: title,
                text: text,
                type: 'success'
            });
        };

        self.error = function(title, text) {
            sweetAlert.swal({
                title: title,
                text: text,
                type: 'error'
            });
        };

        self.alert = function(title, text) {
            sweetAlert.swal({
                title: title,
                text: text
                // type: 'error'
            });
        };

        self.httpError = function() {
            sweetAlert.swal({
                title: '操作失败',
                text: '请检查您的网络连接'
            });
        };

        self.warning = function(callback, title, text, confirmButtonText, cancelButtonText) {
            if (typeof(title) === 'undefined') {
                title = '该操作不可逆，您确认要继续吗?';
            }
            if (typeof(text) === 'undefined') {
                text = '';
            }
            if (typeof(confirmButtonText) === 'undefined') {
                confirmButtonText = '确认';
            }
            if (typeof(cancelButtonText) === 'undefined') {
                cancelButtonText = '返回';
            }
            sweetAlert.swal({
                    title: title,
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: confirmButtonText,
                    cancelButtonText: cancelButtonText,
                    closeOnConfirm: false,
                    closeOnCancel: false,
                    text: text
                },
                function(isConfirm) {
                    if (isConfirm) {
                        callback(
                            function success(type, title, message, callback) {
                                if (!type) {
                                    type = 'success';
                                }
                                if (!title) {
                                    title = '操作成功';
                                }
                                if (!message) {
                                    message = '';
                                }
                                //提示用户，删除成功
                                sweetAlert.swal({ title: title, text: message, type: type }, function() {
                                    if (callback) {
                                        callback();
                                    }
                                });
                            },
                            function error(typeOrResponse, title, message, callback) {
                                var type;
                                if (typeOrResponse && typeOrResponse.status) {
                                    title = typeOrResponse.data.message;
                                    type = 'error';
                                    message = typeOrResponse.config.method + ':' + typeOrResponse.data.path + '. ' + typeOrResponse.data.exception + '->' + typeOrResponse.data.error + '. ' + typeOrResponse.status;
                                } else {
                                    if (!type) {
                                        type = 'error';
                                    }
                                    if (!title) {
                                        title = '操作失败';
                                    }
                                    if (!message) {
                                        message = '';
                                    }
                                }

                                //提示用户，删除失败
                                sweetAlert.swal({ title: title, text: message, type: type }, function() {
                                    if (callback) {
                                        callback();
                                    }
                                });
                            });
                    } else {
                        sweetAlert.swal('操作已取消', '', 'error');
                    }
                });
        };

        return {
            alert: self.alert,
            error: self.error,
            success: self.success,
            warning: self.warning,
            httpError: self.httpError
        };
    });
