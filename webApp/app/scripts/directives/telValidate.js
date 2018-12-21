angular
    .module('homer')
    .directive('telValidate', function() {
        return {
            require: 'ngModel',
            scope: {},
            link: function postLink(scope, element, attrs, controller) {
                // 添加验证器
                controller.$validators.telValidate = function(modelValue, viewValue) {
                    // 获取手机号
                    var tel = viewValue;
                    // 手机号验证正则表达式
                    var reg = /^1[3|4|5|7|8][0-9]{9}$/;
                    // 返回匹配结果
                    return reg.test(viewValue);
                };
            }
        }
    });
