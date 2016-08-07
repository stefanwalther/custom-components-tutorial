define( [], function () {
    'use strict';

    /**
     * @name ccs-boilerplate
     *
     * Boilerplate for custom components.
     * Start with this component and adapt according to your needs to create your very own custom component.
     *
     * @api public
     */
    return {
        name: "ccsBoilerplate",
        restrict: 'E',
        link: function ( scope, element, attrs ) {
            element.html( 'OK, we have a custom component.' );
            console.log( 'OK, we have a custom component.' );
        }
    };
} );
