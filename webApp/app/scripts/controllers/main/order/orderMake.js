/**
 * 登录控制器
 */
angular
    .module('homer')
    .controller('OrderMakeCtrl', function($scope, $uibModal, CommonService, OrderService) {
        var self = this;

        $scope.cargoList = [{
            "weight": null,
            "goodCategory": null
        }];

        $scope.startPlace = $scope.endPlace = {
            name: null,
            lat: null,
            lng: null
        };

        $scope.totalWeight = 0.00;

        $scope.startPlaceInit = chooseStartPlace;

        $scope.endPlaceInit = chooseEndPlace;

        $scope.vehicle = 0;

        $scope.refreshWeight = function() {
            $scope.totalWeight = 0.0;
            for (var i = 0; i < $scope.cargoList.length; i++)
                if ($scope.cargoList[i].weight != "" && $scope.cargoList[i].weight != null)
                    $scope.totalWeight += parseFloat($scope.cargoList[i].weight);
        }

        $scope.cargoInsert = function() {
            $scope.cargoList.push({
                "weight": null,
                "goodCategory": {
                    "name": null
                }
            });
        };

        $scope.cargoDelete = function(index) {
            if ($scope.cargoList.length == 1) {
                alert("至少选择一种货物");
                return;
            }
            if ($scope.cargoList[index].weight != "" && $scope.cargoList[index].weight != null)
                $scope.totalWeight += parseFloat($scope.cargoList[index].weight);
            $scope.cargoList.splice(index, 1);
        };



        function chooseStartPlace() {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/main/map/choosePlace.html',
                size: "lg",
                controller: 'ChoosePlaceCtrl',
                windowClass: "hmodal"
            });

            modalInstance.result.then(function(result) {
                console.log(result); //result关闭是回传的值 
                $scope.startPlace = result;
                refreshDistance();
                // $scope.startPlace.addr = result;
            }, function(reason) {
                console.log(reason); //点击空白区域，总会输出backdrop click，点击取消，则会暑促cancel  
            });

            // if ($scope.endPlace != null)
        }

        function chooseEndPlace() {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/main/map/choosePlace.html',
                size: "lg",
                controller: 'ChoosePlaceCtrl',
                windowClass: "hmodal"
            });

            modalInstance.result.then(function(result) {
                console.log(result); //result关闭是回传的值 
                $scope.endPlace = result;
                refreshDistance();

            }, function(reason) {
                console.log(reason); //点击空白区域，总会输出backdrop click，点击取消，则会暑促cancel  
            });


        }

        function rad(d) {
            return d * Math.PI / 180.0;
        }

        function refreshDistance() {
            if ($scope.startPlace.lat == null || $scope.endPlace.lat == null) return;
            let radLat1 = rad($scope.startPlace.lat);
            let radLat2 = rad($scope.endPlace.lat);
            let a = radLat1 - radLat2;
            let b = rad($scope.startPlace.lng) - rad($scope.endPlace.lng);
            let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
            s = s * 6378.137; // EARTH_RADIUS;
            s = Math.round(s * 10000) / 10000; //输出为公里
            $scope.distance = s;
        }





        $scope.submit = function() {
            var order = {
                "date" : $scope.dateTime,
                "startPlace": $scope.startPlace.name,
                "endPlace": $scope.endPlace.name,
                "startLongitude": $scope.startPlace.lng,
                "startLatitude": $scope.startPlace.lat,
                "endLongitude": $scope.endPlace.lng,
                "endLatitude": $scope.endPlace.lat,
                "distance": $scope.distance,
                "vehicle": $scope.vehicle,
                "orderDetailList": $scope.cargoList
            };
            OrderService.makeOrder(order, function(res) {

                console.log(res);
            });

        };
    });
