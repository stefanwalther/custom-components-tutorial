---
title: "Using Qlik's Capability APIs"
---

When developing Custom Components you can fully leverage the power of Qlik's Capability APIs.

All you need is a reference to the [Root API](http://help.qlik.com/en-US/sense-developer/3.0/Subsystems/APIs/Content/MashupAPI/qlik-interface-interface.htm) in the definition of your component:

```js
define( [
    'qlik'
], function ( qlik ) {
    'use strict';

    return {
        name: "ccsMyComponent",
        restrict: 'E',
        link: function ( scope ) {
           
           // You can now use qlik as the entry point to the Capability APIs
           
        }
    };
} );
```

## Example using the Capability APIs

The following example will render some basic information about the current product version by just using the following HTML element:

```html
<ccs-version-info></ccs-version-info>
```

The `ccs-version-info.qext` file:

```js
{
  "name": "ccs-version-info",
  "description": "Example how to use Qlik's Capability APIs.",
  "type": "component",
  "version": "0.1.0",
  "author": "Stefan Walther"
}
```

```js
define( [
    'qlik',
    'text!./template.ng.html'
], function ( qlik, ngTemplate ) {
    'use strict';

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

```

The `template.ng.html` file:

```html
<div>
    <b>Product Version: </b>{{productVersion}}<br/>
    <b>Product: </b>{{qtProduct}}<br/>
    <b>Is Personal Mode:</b> {{isPersonalMode}}<br/>
</div>
```

{{hint}}
AngularJS allows you to define the template for a directive either inline as string, by passing an object (which is used in the above example), or by pointing to a URL using the `templateUrl` property.  
See more in the [AngularJS Directives](https://docs.angularjs.org/guide/directive) documentation.
{{/hint}}