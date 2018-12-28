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
                CommonService.success();
                $state.reload();
            });
        };

        self.unfreeze = function(id) {
            UserService.unfreeze(id, function() {
                CommonService.success();
                $state.reload();
            });
        };

        $scope.freeze = self.freeze;
        $scope.unfreeze = self.unfreeze;

        self.init();
    });