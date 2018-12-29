angular
    .module('homer')
    .controller('WalletCtrl', function($scope, $state, CommonService, UserService) {
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

        self.init();
    });
