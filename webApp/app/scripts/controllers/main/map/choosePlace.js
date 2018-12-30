/**
 * 登录控制器
 */
angular
    .module('homer')
    .controller('ChoosePlaceCtrl', function($scope, $uibModal, $uibModalInstance, CommonService, VehicleService) {
        var self = this;
        var map;
        var marker;
        var place ={
            name:null,
            lat:null,
            lng:null
        };


        $scope.ok = function() {
            $uibModalInstance.close(place);
        };
        $scope.cancel = function() {
            $uibModalInstance.dismiss('取消选择地点');
        };
        $scope.init = function() {
            console.log("map loading");
            $scope.addressInfo = "双击可以放大 请选择你的起始位置";

            // 百度地图API功能
            map = new BMap.Map("allmap");
            map.centerAndZoom("北京", 12);

            // 定位到当前城市
            var myCity = new BMap.LocalCity();
            myCity.get(function(loc) {
                console.log(loc);
                var cityName = loc.name;
                map.centerAndZoom(cityName, 12);
                markMap(loc.center);
            });

            // 点击监听 鼠标点击位置的地址信息
            map.addEventListener("click", function(e) {
                console.log(e.point.lng + "," + e.point.lat);
                markMap(e.point);
                getAddress(e.point);
            });

        };


        // 标记地图
        function markMap(point) {
            map.clearOverlays(marker);
            marker = new BMap.Marker(point);
            map.addOverlay(marker);
        }

        //单击获取点击的地址
        function getAddress(point) {
            var gc = new BMap.Geocoder();
            gc.getLocation(point, function(rs) {
                var addComp = rs.addressComponents;
                var address = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber; //获取地址
                console.log(address);
                place.name = address;
                place.lat = point.lat;;
                place.lng = point.lng;
                $scope.addressInfo = address;
                $scope.$apply();




                // // 计算距离
                // var output = "从上地到西单驾车需要";
                // var searchComplete = function(results) {
                //     if (transit.getStatus() != BMAP_STATUS_SUCCESS) {
                //         return;
                //     }
                //     var plan = results.getPlan(0);
                //     output += plan.getDuration(true) + "\n"; //获取时间
                //     output += "总路程为：";
                //     output += plan.getDistance(true) + "\n"; //获取距离
                // };
                // var transit = new BMap.DrivingRoute(map, {
                //     renderOptions: { map: map },
                //     onSearchComplete: searchComplete,
                //     onPolylinesSet: function() {
                //         setTimeout(function() { alert(output) }, "1000");
                //     }
                // });
            });
        }
    });
