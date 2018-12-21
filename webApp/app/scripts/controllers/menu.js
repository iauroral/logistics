/**
 * 菜单控制器
 */
angular
    .module('homer')
    .controller('MenuCtrl', function($scope, $state, CommonService, UserService) {
        var self = this;

        self.init = function() {
            
        };

        self.logout = function() {
            UserService.logout()
                .then(function success() {
                    $state.go('login');
                }, function error() {
                    CommonService.httpError();
                });
        };

        $scope.logout = self.logout;

        self.init();
    });