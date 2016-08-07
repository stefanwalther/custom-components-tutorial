define( [], function () {
    'use strict';

    return [
        {
            name: "ccsList",
            restrict: 'E',
            transclude: true,
            scope: {
                message: '@'
            },
            template: '<div>{{message}}<div><ul ng-transclude></ul>',
            controller: function ( $scope ) {

                $scope.items = [];
                this.addListItem = function ( listItem ) {
                    console.log('addListItem: ', listItem);
                    $scope.items.push( listItem )
                }
            }
        },
        {
            name: "ccsListItem",
            restrict: 'E',
            require: '^ccsList',
            template: '<li ng-bind="item.label"></li>',
            link: function ( scope, element, attrs, outerCtrl ) {
                console.log('element', element);
                scope.item = {
                    label:  element[0].textContent,
                    selected: false
                };
                 outerCtrl.addListItem( scope.item );
            }
        }
    ];
} );
