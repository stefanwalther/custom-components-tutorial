---
title: "Installation & Usage of Custom Components"
---

Before we start developing a new Custom Component, let's have a look how Custom Components are installed and used.

## Installation

Technically speaking Custom Components are a new extension type, therefore the installation of a Custom Component is exactly the same compared to installing a Visualization Extension.

### Installation using Qlik Sense Desktop

Follow the instructions [as published here](http://help.qlik.com/en-US/sense-developer/3.0/Subsystems/Extensions/Content/Howtos/deploy-extensions.htm) .

### Installation using Qlik Sense Server

Follow the instructions [as published here](http://help.qlik.com/en-US/sense-developer/3.0/Subsystems/Extensions/Content/Howtos/deploy-extensions.htm) .

## Usage

As soon as a Custom Component is installed, you can immediately use it in the Widget editor.

{{hint}}
Make sure that you reload the Widget editor after you have installed a new Custom Component, as Custom Components are loaded at the same time as the Widget editor loads its UI.
{{/hint}}

### Example

- [Download the sample component "ccs-boilerplate"](docs/downloads/ccs-boilerplate.zip) and install it on either Qlik Sense Desktop or Qlik Sense Server.
- Start the Widget editor and create a new widget (either in a new or existing Widget library).
- In *HTML* enter the following code

```html
<ccs-boilerplate></ccs-boilerplate>
```

- After having selected any app, you should see the following in the *Preview*:

![](./docs/images/installation-usage--preview.png)

- Furthermore if you open the developer console of your browser you should see the following:

![](./docs/images/installation-usage--console.png)


OK; perfect, a very basic Custom Component now works, let's have a look in the next chapter to this was done.


