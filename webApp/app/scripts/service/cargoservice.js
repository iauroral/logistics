/**
 * 用户服务
 */
angular
    .module('homer')
    .service('CargoService', function($http, CommonService) {
        var self = this;

        self.getAllCategories = function(callback) {
            var url = '/api/GoodCategory';
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.save = function(category, callback) {
            var url = '/api/GoodCategory';
            $http.post(url, category)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.update = function(id, category, callback) {
            var url = '/api/GoodCategory/' + id;
            $http.put(url, category)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.delete = function(id, callback) {
            var url = '/api/GoodCategory/' + id;
            $http.delete(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    // CommonService.httpError();
                    CommonService.error('删除失败', '该货物类别已经被使用');
                });
        };

        self.getCategoryById = function(id, callback) {
            var url = '/api/GoodCategory/' + id;
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        return {
            save             : self.save,
            update           : self.update,
            delete           : self.delete,
            getCategoryById  : self.getCategoryById,
            getAllCategories : self.getAllCategories
        };
    });