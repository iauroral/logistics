/**
 * 用户服务
 */
angular
    .module('homer')
    .service('UserService', function($http) {
        var self = this;

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
        self.update = function(id, vehicle, callback) {
            var url = '/api/User/' + id;
            $http.put(url, vehicle)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        return {
            login               : self.login,
            logout              : self.logout,
            register            : self.register,
            getCurrentLoginUser : self.getCurrentLoginUser,
            update              : self.update
        };
    });