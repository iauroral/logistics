angular
    .module('homer')
    .filter('driverState', function() {
        return function(input) {
            if (input === 0) {
                return '<span class="badge badge-danger">未认证</span>';
            } else {
                return '<span class="badge badge-success">已认证</span>';
            }
        };
    });