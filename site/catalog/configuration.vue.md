#### Import the package

Import `defineCustomElements` function from Wizeline Tea in your `main.js` file.

```code
import { defineCustomElements } from '@wizeline/tea';
```

#### Setup

Wizeline Tea is a zero config design system! All you need to do is to tell the browser that there are new custom elements available.

Before your Vue instance(`new Vue(...)`), add

```code
defineCustomElements(window);
```

And you are good to go.
