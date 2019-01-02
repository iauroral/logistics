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

        return {
            alert     : self.alert,
            error     : self.error,
            success   : self.success,
            httpError : self.httpError
        };
    });