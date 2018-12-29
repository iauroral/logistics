/**
 * 登录控制器
 */
angular
    .module('homer')
    .controller('PersonalInfoCtrl', function($scope, $state, CommonService, UserService) {
        var self = this;

        self.init = function() {
            UserService.getCurrentLoginUser()
                .then(function success(response) {
                    $scope.user = response.data;
                }, function error(response) {
                    CommonService.alert('请登录!', '');
                    $state.go('login');
                });
        };

        self.submit = function() {
            UserService.update($scope.user.id, $scope.user, CommonService.success());
        };

        $scope.submit = self.submit;

        self.init();
    });
