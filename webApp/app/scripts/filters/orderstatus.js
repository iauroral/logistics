angular
    .module('homer')
    .filter('orderStatus', function() {
        return function(input) {
            if (input === 0) {
                return '<span class="badge badge-error">等待司机接单</span>';
            } else if (input === 1) {
                return '<span class="badge badge-primary">已有司机接单</span>';
            } else if (input === 2) {
                return '<span class="badge badge-success">进行中</span>';
            } else if (input === 3) {
                return '<span class="badge badge-info">等待货主确认</span>';
            } else {
                return '<span class="badge badge-success">已完成</span>';
            }
        };
    });