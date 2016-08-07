---
title: "Recipes"
---

Some recipes when working with the Custom Component concept:

## Using AngularJS Services

[AngularJS services](https://docs.angularjs.org/api/ng/service) should be referenced using the following pattern:

```js
var $injector = angular.injector( ['ng'] );
var $http = $injector.get( "$http" );
```

Full example:
```js
define( [
  'angular'
], function ( angular ) {

  // Get a reference to the $http service
  var $injector = angular.injector( ['ng'] );
  var $http = $injector.get( "$http" );

  // Your component now using the service
  return {
    name: "ccsMyComponent",
    restrict: 'E',
    replace: true,
    link: function ( scope, element, attrs ) {

      // Now you can use $timeout here

    }
  };
} );
```

## Default Values for Scope Properties

Default values for scope properties should be put into the `compile` method as follows (if they are not intended to be consumed from the property panel):

```js
define( [], function () {
    'use strict';

    return {
        name: "ccsHelloWorld",
        restrict: 'E',
        scope: {
            message: '@'
        },
        compile: function( element, attrs ) {
            attrs.message = (attrs.message) ? attrs.mesage : 'My default message';
        },
        link: function ( scope, element, attrs ) {

            function bind () {
                element.html( scope.message );
            }
            
            // Execute bind() initially ...
            bind();

            scope.$watch( 'message', function ( newVal, oldVal ) {

                // Bind if there are changes ...
                if (newVal !== oldVal) {
                    bind();
                }

            } );
        }
    };
} );
```

If you plan to allow Widget creators to bind a specific property to the values of the property panel, you should use `controller` instead to define the default value of your scope's property:

```js
define( [], function () {
    'use strict';

    return {
        name: "ccsHelloWorld",
        restrict: 'E',
        scope: {
            message: '@'
        },
        controller: function( scope, element, attrs ) {
            scope.message = (scope.message) ? scope.mesage : 'My default message';
        },
        link: function ( scope, element, attrs ) {

            function bind () {
                element.html( scope.message );
            }
            
            // Execute bind() initially ...
            bind();

            scope.$watch( 'message', function ( newVal, oldVal ) {

                // Bind if there are changes ...
                if (newVal !== oldVal) {
                    bind();
                }

            } );
        }
    };
} );
```

