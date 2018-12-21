/**
 * 登录控制器
 */
angular
    .module('homer')
    .controller('LoginCtrl', function($scope, $state, CommonService, UserService) {
        var self = this;

        self.init = function() {
            $scope.user = {
                username: '',
                password: ''
            };
        };

        self.login = function() {
            UserService.login($scope.user)
                .then(function success(response) {
                    $state.go('main.dashboard');
                }, function error() {
                    CommonService.alert('登录失败', '请联系您的网络管理员');
                });
        };

        $scope.login = self.login;

        self.init();
    });