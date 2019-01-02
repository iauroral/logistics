/**
 * 注册控制器
 */
angular
    .module('homer')
    .controller('RegisterCtrl', function($scope, $state, CommonService, UserService) {
        var self = this;

        self.init = function() {
            $scope.user = {
                username: '',
                password: '',
                name: '',
                type: 'DRIVER',
                tel: ''
            };
        };

        self.submit = function() {
            UserService.register($scope.user, function() {
                CommonService.success('注册成功', '欢迎使用本系统');
                $state.go('login');
            });
        };

        $scope.submit = self.submit;

        self.init();
    });