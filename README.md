# Introduction to the Concept of Custom Components

Custom Components are a new concept introduced with version 3.1 of Qlik Sense.
The main purpose of Custom Components is to empower Widget creators with more available components which can then be used in a declarative way.
Such a component could be a slider, a date-picker or anything else which encapsulates some common and re-usable functionality.

The approach of developing Custom Components is similar to the Visualization Extension concept, by using Custom Component API you can make use of the full power of web programming capabilities.

The introduction of the Custom Component API does not contradict the main goal of Widgets ("Create new visualizaton without the need of programming"), it even emphasizes this approach by allowing developers to provide powerful components to Widgets creates, which empowers Widget creators.

As of Qlik Sense 3.1 the concept of Custom Components is only targeted for Widgets, this might change in the future. It could be that Custom Components can be used in other concepts such as Visualization Extensions, Mashups and other ways of extending the product.

# Installation & Usage

Before we start developing a new Custom Component, let's have a look how Custom Components are installed and used.

## Installation

Technically speaking Custom Components are a new extension type, therefore the installation of a Custom Component is exactly the same compared to installing a Visualization Extension.

### Installation using Qlik Sense Desktop

Follow the instructions as published here.

### Installation using Qlik Sense Server

Follow the instructions as published here.

## Usage

As soon as a Custom Component is installed, you can immediately use it in the Widget editor.

{{hint}}
Make sure that you reload the Widget editor after you have installed a new Custom Component, as Custom Components are loaded at the same time as the Widget editor loads its UI.
{{/hint}}

### Example

* [Download the sample component "ccs-boilerplate"](docs/downloads/ccs-boilerplate.zip) and install it on either Qlik Sense Desktop or Qlik Sense Server.
* Start the Widget editor and create a new widget (either in a new or existing Widget library).
* In _HTML_ enter the following code

```html
<ccs-boilerplate></ccs-boilerplate>
```

* After having selected any app, you should see the following in the _Preview_:

![](./docs/images/installation-usage--preview.png)

* Furthermore if you open the developer console of your browser you should see the following:

![](./docs/images/installation-usage--console.png)

OK; perfect, a very basic Custom Component now works, let's have a look in the next chapter to this was done.

# The Custom Component API

The Custom Component API follows the same principles as when developing a Visualization Extension.

If you have never created Visualization Extension, it is highly recommended that you first have a look at the following two documents:

* [undefined]()
* [undefined]()

## Ingredients of a Custom Component

A Custom Components contains the following elements:

* A definition file (.qext file)
* A main JavaScript file
* Other (optional) assets, such as JavaScript libraries, images, fonts, etc.

### The Definition File

* The definition file is the main entry point for Qlik Sense to load a custom component.
* A definition file always uses the file-extension `.qext`

Example:

```js
{
  "name": "ccs-boilerplate",
  "description": "Boilerplate for a custom component.",
  "type": "component",
  "version": "0.1.0",
  "author": "Stefan Walther"
}
```

The following properties are mandatory for a valid definition file:

* **`name`** - The name of the custom component.
* **`description`** - Any meaningful description for your component. Not used anywhere in the product right now, but important for future versions of Qlik Sense.
* **`type`** - Type of the extension, should be always `component` for Custom Components.
* **`version`** - Version of your Custom Component, uses the concept of [Semantic Versioning](http://semver.org/) .
* **`author`** - Some information about the author.

{{hint}}
Further properties can be added to the `.qext` file and it is highly encouraged to do so. Additional properties provide very helpful information
Follow the standards of [npm's package.json definition](https://docs.npmjs.com/files/package.json).
{{/hint}}

### The Main JavaScript File

Custom Components are (right now) basically AngularJS directives.
The purpose of the JavaScript file is to return the signature of an AngularJS directive.

Example:

```js
define( [], function () {
  'use strict';

  return {
    name: "ccsBoilerplate",
    restrict: 'E',
    replace: true,
    link: function ( scope, element, attrs ) {
      element.html( 'OK, we have a custom component.' );
      console.log( 'OK, we have a custom component.' );
    }
  };
} );
```

{{hint}}
Technically speaking it would work also to register your directive with `qvangular.directive( ...` but you should never do so, because the concept of Custom Components could be extended in the future far beyond just AngularJS directives.
{{/hint}}

#### Naming of the Component's name (camelCase)

The property `name` should match what you have defined in your `.qext` file.
But if you compare the `name` property of the `.qext` file with the `name` property of the JavaScript file, you'll see a difference:

* `name` property of the `.qext` file: `ccs-boilerplate`
* `name` property of the JavaScript file: `ccsBoilerplate`

We have already seen in the previous chapter that one would use the Custom Component with the `<ccs-boilerplate></ccs-boilerplate>` Html elment.
The reason for the difference between the AngularJS directive signature and the definition file is that AngularJS follows the principle of [camelCase](http://en.wikipedia.org/wiki/CamelCase) .

> Angular normalizes an element's tag and attribute name to determine which elements match which directives. We typically refer to directives by their case-sensitive camelCase normalized name (e.g. ngModel). However, since HTML is case-insensitive, we refer to directives in the DOM by lower-case forms, typically using dash-delimited attributes on DOM elements (e.g. ng-model).
(taken from the  [AngularJS documentation: directives](https://docs.angularjs.org/guide/directive))

### Prefixes for your Custom Component

The given example of `ccs-boilerplate` uses the prefix `ccs` (which stands for **c**ustom **c**omponents **c**ample).
Use prefixes of your Custom Components to prevent conflict with components created by other developers.

You should not used the prefix `qw`, which is reserved for Custom Components provided by Qlik, such as `qw-sys-info`.