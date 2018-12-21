/**
 *
 * calendarCtrl
 *
 */

angular
    .module('homer')
    .controller('calendarCtrl', calendarCtrl)

function calendarCtrl($scope) {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.alertMessage = "Report all events from UI calendar.";

    // Events
    $scope.events = [
        {title: 'All Day Event',start: new Date(y, m, 1)},
        {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
        {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
        {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
        {title: 'Homer task',start: new Date(y, m, d + 5, 19, 0),end: new Date(y, m, d + 6, 22, 30),allDay: false, backgroundColor :"#62cb31", borderColor :"#62cb31"},
        {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    ];


    /* message on eventClick */
    $scope.alertOnEventClick = function( event, allDay, jsEvent, view ){
        $scope.alertMessage = (event.title + ': Clicked ');
    };
    /* message on Drop */
    $scope.alertOnDrop = function(event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view){
        $scope.alertMessage = (event.title +': Droped to make dayDelta ' + dayDelta);
    };
    /* message on Resize */
    $scope.alertOnResize = function(event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view ){
        $scope.alertMessage = (event.title +': Resized to make dayDelta ' + minuteDelta);
    };

    /* config object */
    $scope.uiConfig = {
        calendar:{
            height: 550,
            editable: true,
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            eventClick: $scope.alertOnEventClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize
        }
    };

    /* Event sources array */
    $scope.eventSources = [$scope.events];

}