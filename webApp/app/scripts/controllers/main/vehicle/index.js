/**
 * 登录控制器
 */
angular
    .module('homer')
    .controller('VehicleIndexCtrl', function($scope, CommonService, VehicleService) {
        var self = this;

        self.init = function() {
            VehicleService.getAllVehicles(function(data) {
                $scope.vehicles = data._embedded.vehicles;
            });
        };

        self.delete = function(id) {
            CommonService.warning(function(success, error) {
                VehicleService.delete(id, function() {
                    CommonService.success('删除成功');
                    $scope.vehicles = $scope.vehicles.filter(function(value) {
                        return value.id !== id;
                    });
                });
            });
        };

        $scope.delete = self.delete;

        self.init();
    });