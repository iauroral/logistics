angular
    .module('homer')
    .service('OrderService', function($http, CommonService) {
        var self = this;

        self.getAllOrder = function(callback) {
            var url = '/api/Order';
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.makeOrder = function(order, callback) {
            var url = '/api/Order/make';
            console.log(order);
            $http.post(url, order)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.update = function(id, price, callback) {
            var url = '/api/Order/' + id;
            $http.put(url, price)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.delete = function(id, callback) {
            var url = '/api/Order/' + id;
            $http.delete(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.getOrderById = function(id, callback) {
            var url = '/api/Order/' + id;
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.getOrderRunningByUser = function(callback) {
            var url = '/api/Order/running';
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.getOrderCompletedByUser = function(callback) {
            var url = '/api/Order/completed';
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        /**
         * 综合查询
         */
        self.query = function(params, callback) {
            var url = '/api/Order/query';
            $http.get(url, { params: params })
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        return {
            makeOrder         : self.makeOrder,
            update       : self.update,
            delete       : self.delete,
            getOrderRunningByUser : self.getOrderRunningByUser,
            save                    : self.save,
            query                   : self.query,
            update                  : self.update,
            delete                  : self.delete,
            getOrderRunningByUser   : self.getOrderRunningByUser,
            getOrderCompletedByUser : self.getOrderCompletedByUser
        };
    });