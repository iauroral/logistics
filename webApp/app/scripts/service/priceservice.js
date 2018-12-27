angular
    .module('homer')
    .service('PriceService', function($http, CommonService) {
        var self = this;

        self.getAllPrices = function(callback) {
            var url = '/api/Price';
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
            var url = '/api/Price';
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
            var url = '/api/Price/' + id;
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
            var url = '/api/Price/' + id;
            $http.delete(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.getPriceById = function(id, callback) {
            var url = '/api/Price/' + id;
            $http.get(url)
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
            getPriceById : self.getPriceById,
            getAllPrices : self.getAllPrices
        };
    });