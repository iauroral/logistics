/**
 *
 * datatablesCtrl
 *
 */

angular
    .module('homer')
    .controller('datatablesCtrl', datatablesCtrl)

function datatablesCtrl($scope, DTOptionsBuilder, DTColumnBuilder) {

    // See all possibility of fetch data with example code at:
    // http://l-lin.github.io/angular-datatables/#/withAjax

    // Please note that api file is not included to grunt build process
    // As it will be probably replacement to some REST service we only add it for demo purpose

    $scope.dtOptions = DTOptionsBuilder.fromSource('api/datatables.json')
        .withDOM("<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tp")
        .withButtons([
            {extend: 'copy',className: 'btn-sm'},
            {extend: 'csv',title: 'ExampleFile', className: 'btn-sm'},
            {extend: 'pdf', title: 'ExampleFile', className: 'btn-sm'},
            {extend: 'print',className: 'btn-sm'}
        ]);
    $scope.dtColumns = [
        DTColumnBuilder.newColumn('Name').withTitle('Name'),
        DTColumnBuilder.newColumn('Position').withTitle('Position'),
        DTColumnBuilder.newColumn('Office').withTitle('Office'),
        DTColumnBuilder.newColumn('Age').withTitle('Age'),
        DTColumnBuilder.newColumn('Start_date').withTitle('Start_date'),
        DTColumnBuilder.newColumn('Salary').withTitle('Salary')
    ];
}