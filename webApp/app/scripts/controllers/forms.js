/**
 *
 * formsCtrl
 *
 */

angular
    .module('homer')
    .controller('formsCtrl', formsCtrl)
    .controller('SelectLocalCtrl', SelectLocalCtrl)
    .controller('RadiolistCtrl', RadiolistCtrl)
    .controller('Html5InputsCtrl', Html5InputsCtrl)
    .controller('DatepickerDemoCtrl', DatepickerDemoCtrl)
    .controller('spinCtrl', spinCtrl)

function formsCtrl($scope) {

    $scope.user = {
        name: 'awesome user',
        desc: 'Awesome user \ndescription!',
        remember: true
    };


    $scope.person = {};
    $scope.people = [
        { name: 'Adam',      email: 'adam@email.com',      age: 10 },
        { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
        { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 },
        { name: 'Samantha',  email: 'samantha@email.com',  age: 31 },
        { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
        { name: 'Natasha',   email: 'natasha@email.com',   age: 54 },
        { name: 'Nicole',    email: 'nicole@email.com',    age: 43 },
        { name: 'Adrian',    email: 'adrian@email.com',    age: 21 }
    ];

    $scope.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];
    $scope.multipleDemo = {};
    $scope.multipleDemo.colors = ['Blue','Red'];

    $scope.availableTags = ['Branding','Website','Design','Ilustration','New','Important','External'];
    $scope.multipleTags = {};
    $scope.multipleTags.tags = ['Branding','Website','Design','Ilustration','New'];

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };
}

function SelectLocalCtrl($scope, $filter) {
    $scope.user = {
        status: 2
    };

    $scope.statuses = [
        {value: 1, text: 'status1'},
        {value: 2, text: 'status2'},
        {value: 3, text: 'status3'},
        {value: 4, text: 'status4'}
    ];

    $scope.showStatus = function() {
        var selected = $filter('filter')($scope.statuses, {value: $scope.user.status});
        return ($scope.user.status && selected.length) ? selected[0].text : 'Not set';
    };
}

function RadiolistCtrl($scope, $filter){
    $scope.user = {
        status: 2
    };

    $scope.statuses = [
        {value: 1, text: 'status1'},
        {value: 2, text: 'status2'}
    ];

    $scope.showStatus = function() {
        var selected = $filter('filter')($scope.statuses, {value: $scope.user.status});
        return ($scope.user.status && selected.length) ? selected[0].text : 'Not set';
    };
}

function Html5InputsCtrl($scope) {
    $scope.user = {
        email: 'email@example.com',
        tel: '123-45-67',
        number: 29,
        range: 10,
        url: 'http://example.com',
        search: 'blabla',
        color: '#6a4415',
        date: null,
        time: '12:30',
        datetime: null,
        month: null,
        week: null
    };
}

function DatepickerDemoCtrl($scope) {
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
}

function spinCtrl($scope){

    $scope.inputteresxcs = 55;
    $scope.spinOption1 = {
        min: 0,
        max: 100,
        step: 0.1,
        decimals: 2,
        boostat: 5,
        maxboostedstep: 10,
    };

    $scope.spinOption2 = {
        verticalbuttons: true
    }

    $scope.spinOption3 = {
        postfix: '%'
    }

    $scope.spinOption4 = {
        postfix: "a button",
        postfix_extraclass: "btn btn-default"
    }

}