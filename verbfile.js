'use strict';
module.exports = function ( verb ) {

    //verb.helper( 'hint', require('helper-hybrid-md'));
    verb.use( require( 'verb-generate-readme' ) );
    verb.task( 'default', ['readme']);
};
