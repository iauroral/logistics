/**
 *
 * editorCtrl
 *
 */

angular
    .module('homer')
    .controller('editorCtrl', editorCtrl)

function editorCtrl($scope) {

    $scope.summernoteText = ['<h3>Hello Jonathan! </h3>',
        '<p>dummy text of the printing and typesetting industry. <strong>Lorem Ipsum has been the dustrys</strong> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more',
        '<br/><br/>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
        'recently with.</p><p>Mark Smith</p>'].join('');

    $scope.summernoteTextTwo = ['<h4>It is a long established fact</h4>',
        '<p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)',
        '<p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)',
        'with.</p>'].join('');

    $scope.summernoteOpt = {
        toolbar: [
            ['headline', ['style']],
            ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
            ['textsize', ['fontsize']],
            ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
        ]
    };

}