/**
 *
 * timelineCtrl
 *
 */

angular
    .module('homer')
    .controller('timelineCtrl', timelineCtrl)

function timelineCtrl($scope) {


    $scope.timelineItems = [
        {
            type: "The standard chunk of Lorem Ipsum",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ",
            date: 1423063721,
            info: "It is a long established fact that"
        },
        {
            type: "There are many variations",
            content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
            date: 1423063721,
            info: "It is a long established fact that"
        },
        {
            type: "Contrary to popular belief",
            content: " If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
            date: 1423063721,
            info: "It is a long established fact that"
        },
        {
            type: "Lorem Ipsum",
            content: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.",
            date: 1423063721,
            info: "It is a long established fact that"
        },
        {
            type: "The generated Lorem Ipsum",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ",
            date: 1423063721,
            info: "It is a long established fact that"
        },
        {
            type: "The standard chunk",
            content: "Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            date: 1423063721,
            info: "It is a long established fact that"
        }
    ];

}