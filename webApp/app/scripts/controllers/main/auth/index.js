angular
    .module('homer')
    .controller('AuthIndexCtrl', function($scope, CommonService, UserService) {
        var self = this;

        self.init = function() {
            UserService.getAllUsers(function(data) {
                $scope.users = data._embedded.users;
            });
        };

        self.init();
    });