/**
 * 导航控制器
 */
angular
    .module('homer')
    .controller('NavigationCtrl', function($scope, $state, CommonService, UserService) {
        var self = this;

        self.init = function() {
            self.getCurrentLoginUser();
        };

        self.getCurrentLoginUser = function() {
            UserService.getCurrentLoginUser()
                .then(function success(response) {
                    $scope.user = response.data;
                }, function error(response) {
                    CommonService.alert('请登录!', '');
                    $state.go('login');
                });
        };

        self.init();
    });