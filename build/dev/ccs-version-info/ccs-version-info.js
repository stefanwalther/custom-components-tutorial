define( [
    'qlik',
    'text!./template.ng.html'
], function ( qlik, ngTemplate ) {
    'use strict';

    /**
     * @name ccs-version-info
     *
     * @example
     *
     * <ccs-version-info></ccs-version-info>
     *
     * @api public
     */
    return {
        name: "ccsVersionInfo",
        restrict: 'E',
        template: ngTemplate,
        link: function ( scope ) {
            var global = qlik.getGlobal();

            // Retrieve the product version
            global.getProductVersion( function ( reply ) {
                scope.productVersion = reply.qReturn;
            } );

            // Retrieve the product
            global.getQTProduct( function ( reply ) {
                scope.qtProduct = reply.qReturn;
            } );


            // Retrieve if we are working in personal mode or not
            global.isPersonalMode( function ( reply ) {
                scope.isPersonalMode = reply.qReturn;
            } );
        }
    };
} );
