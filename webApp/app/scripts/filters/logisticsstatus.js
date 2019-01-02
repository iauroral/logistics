angular
    .module('homer')
    .filter('logisticsStatus', function() {
        return function(input) {
            if (input === 0) {
                return '<span class="badge badge-error">等待运输</span>';
            } else if (input === 1) {
                return '<span class="badge badge-danger">运输中</span>';
            } else {
                return '<span class="badge badge-success">已经到达</span>';
            }
        };
    });