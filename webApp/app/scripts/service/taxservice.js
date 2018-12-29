angular
    .module('homer')
    .service('TaxService', function($http, CommonService) {
        var self = this;

        self.getAllTaxs = function(callback) {
            var url = '/api/Tax';
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.save = function(tax, callback) {
            var url = '/api/Tax';
            $http.post(url, tax)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.update = function(id, tax, callback) {
            var url = '/api/Tax/' + id;
            $http.put(url, tax)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.delete = function(id, callback) {
            var url = '/api/Tax/' + id;
            $http.delete(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.getTaxById = function(id, callback) {
            var url = '/api/Tax/' + id;
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
            save       : self.save,
            update     : self.update,
            delete     : self.delete,
            getTaxById : self.getTaxById,
            getAllTaxs : self.getAllTaxs
        };
    });