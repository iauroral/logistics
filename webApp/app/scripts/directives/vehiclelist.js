angular
    .module('homer')
    .directive('vehicleList', function(VehicleService) {
        return {
            restrict: 'E',
            templateUrl: 'views/directives/vehiclelist.html',
            scope: {
                ngModel: '='
            },
            link: function postLink(scope, element, attrs) {
                var self = this;

                self.init = function() {
                    VehicleService.getAllVehicles(function(data) {
                        scope.vehicles = data._embedded.vehicles;
                        scope.$watch('ngModel', self.watchNgModel);
                    });
                };

                self.watchNgModel = function(newValue) {
                    if (newValue && newValue.id) {
                        scope.vehicle = newValue;
                    }
                };

                self.change = function(vehicle) {
                    scope.ngModel = vehicle;
                };

                scope.change = self.change;

                self.init();
            }
        }
    });
