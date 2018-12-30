angular
    .module('homer')
    .directive('cargoList', function(CargoService) {
        return {
            restrict: 'E',
            templateUrl: 'views/directives/cargolist.html',
            scope: {
                ngModel: '='
            },
            link: function postLink(scope, element, attrs) {
                var self = this;

                self.init = function() {
                    CargoService.getAllCategories(function(data) {
                        scope.cargoes = data._embedded.goodCategories;
                        scope.$watch('ngModel', self.watchNgModel);
                    });
                };

                self.watchNgModel = function(newValue) {
                    if (newValue && newValue.id) {
                        scope.cargo = newValue;
                    }
                };

                self.change = function(cargo) {
                    scope.ngModel = cargo;
                };

                scope.change = self.change;

                self.init();
            }
        }
    });
