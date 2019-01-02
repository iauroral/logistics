/**
 * 用户服务
 */
angular
    .module('homer')
    .service('UserService', function($http, CommonService) {
        var self = this;

        self.getAllUsers = function(callback) {
            var url = '/api/User';
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.login = function(user) {
            var url = '/api/User/login';
            return $http.post(url, user);
        };

        self.register = function(user, callback) {
            var url = '/api/User/register';
            $http.post(url, user)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.error('注册失败', '可能是您的网络连接错误或用户名重复');
                });
        };

        self.freeze = function(id, callback) {
            var url = '/api/User/freeze/' + id;
            $http.put(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.unfreeze = function(id, callback) {
            var url = '/api/User/unfreeze/' + id;
            $http.put(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.logout = function() {
            var url = '/api/User/logout';
            return $http.post(url);
        };

        self.getCurrentLoginUser = function() {
            var url = '/api/User/getCurrentLoginUser';
            return $http.get(url);
        };

        //修改个人信息
        self.update = function(id, user, callback) {
            var url = '/api/User/update/' + id;
            $http.put(url, user)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.pay = function(id, callback) {
            var url = '/api/User/pay/' + id;
            $http.put(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        return {
            pay                 : self.pay,
            login               : self.login,
            update              : self.update,
            freeze              : self.freeze,
            logout              : self.logout,
            register            : self.register,
            unfreeze            : self.unfreeze,
            getAllUsers         : self.getAllUsers,
            getCurrentLoginUser : self.getCurrentLoginUser
        };
    });