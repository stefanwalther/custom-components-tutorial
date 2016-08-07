define( [], function () {
    'use strict';

    /**
     * @name ccs-hello-world
     *
     * Hello-World custom component.
     *
     * @api public
     */
    return {
        name: "ccsHelloWorld",
        restrict: 'E',
        scope: {
            message: '@'
        },
        controller: function( $scope, $element, $attrs ) {
            //if (!$scope.message) {$scope.message = 'My default message'; }
        },
        link: function ( scope, element, attrs ) {

            function bind () {
                element.html( scope.message );
            }

            // Execute bind() initially ...
            bind();

            // Watch changes in our scope ...
            scope.$watch( 'message', function ( newVal, oldVal ) {

                console.log('watch', newVal, oldVal);

                // Bind if there are changes ...
                if (newVal !== oldVal) {
                    bind();
                }

            } );
        }
    };
} );
