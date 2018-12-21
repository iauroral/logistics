/**
 *
 * nggridCtrl
 *
 */

angular
    .module('homer')
    .controller('nggridCtrl', nggridCtrl)

function nggridCtrl($scope) {

    $scope.exampleData = [ { "Name": "Jakeem", "Email": "imperdiet@vulputatevelit.com", "Company": "Laoreet Lectus Corporation", "City": "Vaux-sur-Sure", "Country": "Papua New Guinea" }, { "Name": "Kadeem", "Email": "sit.amet.risus@scelerisquenequesed.net", "Company": "Mi Felis Adipiscing Institute", "City": "Fauglia", "Country": "Bouvet Island" }, { "Name": "Paula", "Email": "venenatis.lacus@milorem.net", "Company": "Libero LLP", "City": "Tirupati", "Country": "Antigua and Barbuda" }, { "Name": "Bree", "Email": "adipiscing.non.luctus@loremutaliquam.edu", "Company": "Vitae Purus Gravida Institute", "City": "Chatteris", "Country": "Poland" }, { "Name": "Quinn", "Email": "Nunc@ac.com", "Company": "Dui Lectus Rutrum Consulting", "City": "Wolverhampton", "Country": "Venezuela" }, { "Name": "Magee", "Email": "pretium.aliquet.metus@venenatislacus.co.uk", "Company": "Dui Associates", "City": "Stokrooie", "Country": "Japan" }, { "Name": "Rowan", "Email": "mus@rutrum.net", "Company": "Diam Pellentesque Habitant Institute", "City": "Ashburton", "Country": "Taiwan" }, { "Name": "Nina", "Email": "lobortis.augue@feugiatnec.org", "Company": "Auctor Velit Eget Consulting", "City": "Stevenage", "Country": "Denmark" }, { "Name": "Chava", "Email": "nec@ipsumSuspendissesagittis.com", "Company": "Egestas Company", "City": "Aulnay-sous-Bois", "Country": "Togo" }, { "Name": "Uma", "Email": "tincidunt.nunc@vestibulumneque.net", "Company": "Sem Semper Corp.", "City": "Dalkeith", "Country": "Nigeria" }, { "Name": "Amal", "Email": "laoreet.posuere@eu.net", "Company": "Non Massa PC", "City": "Stafford", "Country": "South Sudan" }, { "Name": "Dana", "Email": "Nulla.dignissim@mattisornarelectus.co.uk", "Company": "Laoreet PC", "City": "Gentinnes", "Country": "Korea, South" }, { "Name": "Iris", "Email": "nostra.per.inceptos@magnamalesuada.co.uk", "Company": "Diam Vel LLC", "City": "Oudekapelle", "Country": "Dominican Republic" }, { "Name": "Joshua", "Email": "Duis@enimgravidasit.com", "Company": "Magna Foundation", "City": "San Francisco", "Country": "Guinea-Bissau" }, { "Name": "Rosalyn", "Email": "egestas.ligula.Nullam@auctorullamcorpernisl.ca", "Company": "Sodales Mauris LLC", "City": "Seydişehir", "Country": "Sudan" }, { "Name": "Hilary", "Email": "et.pede.Nunc@accumsanneque.co.uk", "Company": "Et Rutrum Corp.", "City": "Broechem", "Country": "Bulgaria" }, { "Name": "Amena", "Email": "nisl.Maecenas.malesuada@vitaeorci.edu", "Company": "Quis LLC", "City": "Joliet", "Country": "Saint Lucia" }, { "Name": "Rashad", "Email": "Pellentesque.tincidunt@euneque.org", "Company": "Suspendisse Tristique Neque Industries", "City": "Amlwch", "Country": "Timor-Leste" }, { "Name": "Sharon", "Email": "ornare.sagittis@vitaeeratvel.ca", "Company": "Tellus Foundation", "City": "Woodstock", "Country": "Chile" } ];

    $scope.gridOptions = {
        data: 'exampleData'
    };
//
    $scope.gridOptionsTwo = {
        data: 'exampleData',
        showGroupPanel: true,
        jqueryUIDraggable: true
    }
}