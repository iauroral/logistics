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

        self.save = function(price, callback) {
            var url = '/api/Order';
            $http.post(url, price)
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

        self.getOrderRunningByUser = function(user, callback) {
            var url = '/api/Order/running';
            $http.post(url, user)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.getOrderCompletedByUser = function(user, callback) {
            var url = '/api/Order/completed';
            $http.post(url, user)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        return {
            save         : self.save,
            update       : self.update,
            delete       : self.delete,
            getOrderRunningByUser : self.getOrderRunningByUser,
            getOrderCompletedByUser : self.getOrderCompletedByUser
        };
    });