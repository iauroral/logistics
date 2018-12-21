/**
 *
 * validationCtrl
 *
 */

angular
    .module('homer')
    .controller('validationCtrl', validationCtrl)

function validationCtrl($scope) {

    $scope.signupForm = function() {

        if ($scope.signup_form.$valid) {
            // Submit as normal
        } else {
            $scope.signup_form.submitted = true;
        }
    }

}
