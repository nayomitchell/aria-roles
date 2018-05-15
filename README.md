# aria-roles

A map of aria roles and their descriptions, as detailed by [ARIA](https://www.w3.org/TR/html-aria/#allowed-aria-roles-states-and-properties).

## Installation

```console
npm install aria-roles --save
```

## Usage

Use this package in places where you'd use ARIA role strings.

At the top of your file, add the following:

```javascript
import { Roles } from aria-roles;
```

Then you can use the values wherever they're needed:

```javascript
<div class="menuItem" role={Roles.MenuItem}/>
```

Resolves to

```javascript
<div class="menuItem" role="menuitem"/>
```