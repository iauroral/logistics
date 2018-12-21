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

        self.logout = function() {
            var url = '/api/User/logout';
            return $http.post(url);
        };

        self.getCurrentLoginUser = function() {
            var url = '/api/User/getCurrentLoginUser';
            return $http.get(url);
        };

        return {
            login               : self.login,
            logout              : self.logout,
            getCurrentLoginUser : self.getCurrentLoginUser
        };
    });