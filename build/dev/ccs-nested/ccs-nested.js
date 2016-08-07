/*global define*/
define( [], function () {
    'use strict';

    /**
     * @name Nested Component Example (ccsNested)
     *
     * @example
     *
     * <ccs-nested>
     *     <ccs-nested-item></ccs-nested-item>
     *     <ccs-nested-item></ccs-nested-item>
     * </ccs-nested>
     *
     */
    return [
        {
            name: "ccsNested",
            restrict: 'E',
            transclude: true,
            template: '<div>I am the outer content<div ng-transclude></div>(end of outer content)</div>'
        },
        {
            name: "ccsNestedItem",
            restrict: 'E',
            require: '^ccsNested',
            template: '<div style="margin-left:30px;">I am the inner content</div>'
        }
    ];
} );
