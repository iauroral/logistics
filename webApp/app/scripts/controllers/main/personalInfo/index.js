/**
 * 登录控制器
 */
angular
    .module('homer')
    .controller('PersonalInfoCtrl', function($scope, $state, UserService, CommonService) {
        var self = this;

        self.init = function() {
            // Initial user
            // $scope.user = 
            // {
            //     "id": 2,
            //     "name": "货主",
            //     "username": "owner",
            //     "password": "owner",
            //     "type": "OWNER",
            //     "status": 0,
            //     "balance": 100000.00,
            //     "tel": "17695552766",
            //     "commonGoods": "蔬菜",
            //     "address": "天津市北辰区",
            //     "license": null,
            //     "starLevel": null,
            //     "vehicle": null
            // }
            UserService.getCurrentLoginUser()
                .then(function success(response) {
                    $scope.user = response.data;
                    if ($scope.user.type == "OWNER") $scope.userType = "货主";
                    else if ($scope.user.type == "DRIVER") $scope.userType = "司机";
                    else if ($scope.user.type == "ADMIN") $scope.userType = "管理员";

                }, function error(response) {
                    CommonService.alert('请登录!', '');
                    $state.go('login');
                });
        };

        $scope.edit = function() {
            $scope.isEdit = 1;
        };

        $scope.cancel = function() {
            $scope.isEdit = 0;
        };

        $scope.submit = function() {
            $scope.isEdit = 0;
            UserService.update($scope.user.id, $scope.user, CommonService.success());
        };

        // Initial step
        $scope.step = 1;



        self.init();
    });
