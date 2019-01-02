/**
 * 登录控制器
 */
angular
    .module('homer')
    .controller('VehicleEditCtrl', function($scope, $state, $stateParams, CommonService, VehicleService) {
        var self = this;

        self.init = function() {
            var id = $stateParams.id;
            VehicleService.getVehicleById(id, function(vehicle) {
                $scope.vehicle = vehicle;
            });
        };

        self.submit = function() {
            VehicleService.update($stateParams.id, $scope.vehicle, function() {
                CommonService.success('更新成功', '更新车型成功');
                $state.go('main.vehicle', {}, { reload: true });
            });
        };

        $scope.submit = self.submit;

        self.init();
    });