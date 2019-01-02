angular
    .module('homer')
    .filter('userState', function() {
        return function(input) {
            if (input) {
                return '<span class="badge badge-danger">冻结</span>';
            } else {
                return '<span class="badge badge-success">正常</span>';
            }
        };
    });