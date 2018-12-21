/**
 *
 * alertsCtrl
 *
 */

angular
    .module('homer')
    .controller('alertsCtrl', alertsCtrl)

function alertsCtrl($scope, sweetAlert, notify) {

    $scope.demo1 = function () {
        sweetAlert.swal({
            title: "Welcome in Alerts",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        });
    }

    $scope.demo2 = function () {
        sweetAlert.swal({
            title: "Good job!",
            text: "You clicked the button!",
            type: "success"
        });
    }

    $scope.demo3 = function () {
        sweetAlert.swal({
                title: "Are you sure?",
                text: "Your will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!"
            },
            function () {
                sweetAlert.swal("Booyah!");
            });
    }

    $scope.demo4 = function () {
        sweetAlert.swal({
                title: "Are you sure?",
                text: "Your will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel plx!",
                closeOnConfirm: false,
                closeOnCancel: false },
            function (isConfirm) {
                if (isConfirm) {
                    sweetAlert.swal("Deleted!", "Your imaginary file has been deleted.", "success");
                } else {
                    sweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");
                }
            });
    }

    $scope.msg = 'Hello! This is a sample message!';
    $scope.demo = function () {
        notify({
            message: $scope.msg,
            classes: $scope.classes,
            templateUrl: $scope.template,
            position: 'center'
        });
    };
    $scope.closeAll = function () {
        notify.closeAll();
    };

    $scope.homerTemplate = 'views/common/notify.html';
    $scope.homerDemo1 = function(){
        notify({ position: 'center', message: 'Info - This is a Homer info notification', classes: 'alert-info', templateUrl: $scope.homerTemplate});
    }
    $scope.homerDemo2 = function(){
        notify({ position: 'center', message: 'Success - This is a Homer success notification', classes: 'alert-success', templateUrl: $scope.homerTemplate});
    }
    $scope.homerDemo3 = function(){
        notify({ position: 'center', message: 'Warning - This is a Homer warning notification', classes: 'alert-warning', templateUrl: $scope.homerTemplate});
    }
    $scope.homerDemo4 = function(){
        notify({ position: 'center', message: 'Danger - This is a Homer danger notification', classes: 'alert-danger', templateUrl: $scope.homerTemplate});
    }

}