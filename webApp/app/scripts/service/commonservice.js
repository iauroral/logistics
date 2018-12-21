/**
 * 公共服务
 */
angular
    .module('homer')
    .service('CommonService', function(sweetAlert) {
        var self = this;

        self.alert = function(title, text) {
            sweetAlert.swal({
                title: title,
                text: text
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
            httpError : self.httpError
        };
    });