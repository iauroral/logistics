angular
    .module('homer')
    .controller('AcceptOrderCtrl', function($scope, $state, CommonService, UserService, OrderService) {
        var self = this;

        self.init = function() {
            self.authOrNot();
            self.initParams();
            self.load();
        };

        self.authOrNot = function() {
            UserService.getCurrentLoginUser()
                .then(function success(response) {
                    $scope.user = response.data;
                    if ($scope.user.status === 0) {
                        CommonService.alert('您还未缴纳押金，不能接收订单!', '');
                        $state.go('main.dashboard');
                    }
                }, function error(response) {
                    CommonService.alert('请登录!', '');
                    $state.go('login');
                });
        };

        self.initParams = function() {
            $scope.params = {
                minPrice: undefined,
                startDate: undefined,
                endDate: undefined,
                minDistance: undefined,
                maxDistance: undefined
            };
        };

        self.load = self.reload = function() {
            OrderService.query($scope.params, function(data) {
                console.log(data);
            });
        };

        $scope.reload = self.reload;

        self.init();
    });
