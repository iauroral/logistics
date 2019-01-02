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

        self.grub = function(id, callback) {
            var url = '/api/Order/grub/' + id;
            $http.put(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.pay = function(id, driver, callback) {
            var url = '/api/Order/pay/' + id;
            $http.put(url, driver)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.driverRunning = function(callback) {
            var url = '/api/Order/driver/running';
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.driverCompleted = function(callback) {
            var url = '/api/Order/driver/completed';
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.in = function(id, callback) {
            var url = '/api/Order/in/' + id;
            $http.put(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.finish = function(id, callback) {
            var url = '/api/Order/finish/' + id;
            $http.put(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        self.confirm = function(id, callback) {
            var url = '/api/Order/confirm/' + id;
            $http.put(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    CommonService.httpError();
                });
        };

        return {
            in                      : self.in,
            pay                     : self.pay,
            grub                    : self.grub,
            save                    : self.save,
            query                   : self.query,
            update                  : self.update,
            finish                  : self.finish,
            delete                  : self.delete,
            confirm                 : self.confirm,
            makeOrder               : self.makeOrder,
            getOrderById            : self.getOrderById,
            driverRunning           : self.driverRunning,
            driverCompleted         : self.driverCompleted,
            getOrderRunningByUser   : self.getOrderRunningByUser,
            getOrderCompletedByUser : self.getOrderCompletedByUser
        };
    });