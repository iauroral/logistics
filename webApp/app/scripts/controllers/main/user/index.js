angular
    .module('homer')
    .controller('UserIndexCtrl', function($scope, $state, CommonService, UserService) {
        var self = this;

        self.init = function() {
            UserService.getAllUsers(function(data) {
                $scope.users = data._embedded.users;
            });
        };

        self.freeze = function(id) {
            UserService.freeze(id, function() {
                CommonService.success('冻结成功', '该用户登录受限');
                $state.reload();
            });
        };

        self.unfreeze = function(id) {
            UserService.unfreeze(id, function() {
                CommonService.success('解冻成功', '该用户可正常登录');
                $state.reload();
            });
        };

        $scope.freeze = self.freeze;
        $scope.unfreeze = self.unfreeze;

        self.init();
    });