/**
 * 用户服务
 */
angular
    .module('homer')
    .service('VehicleService', function($http, CommonService) {
        var self = this;

        self.getAllVehicles = function(callback) {
            var url = '/api/Vehicle';
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.save = function(vehicle, callback) {
            var url = '/api/Vehicle';
            $http.post(url, vehicle)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.update = function(id, vehicle, callback) {
            var url = '/api/Vehicle/' + id;
            $http.put(url, vehicle)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.delete = function(id, callback) {
            var url = '/api/Vehicle/' + id;
            $http.delete(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.error('删除失败', '此车型已被使用');
                });
        };

        self.getVehicleById = function(id, callback) {
            var url = '/api/Vehicle/' + id;
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
            save           : self.save,
            update         : self.update,
            delete         : self.delete,
            getVehicleById : self.getVehicleById,
            getAllVehicles : self.getAllVehicles
        };
    });