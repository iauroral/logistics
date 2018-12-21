/**
 * HOMER - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */

angular
    .module('homer')
    .directive('touchSpin', touchSpin)


/**
 * touchSpin - Directive for Bootstrap TouchSpin
 */
function touchSpin() {
    return {
        restrict: 'A',
        scope: {
            spinOptions: '=',
        },
        link: function (scope, element, attrs) {
            scope.$watch(scope.spinOptions, function(){
                render();
            });
            var render = function () {
                $(element).TouchSpin(scope.spinOptions);
            };
        }
    }
};