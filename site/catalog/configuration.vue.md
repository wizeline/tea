#### Setup the package

Import `defineCustomElements` function and the `css` from Wizeline Tea.

```code
import { defineCustomElements } from '@wizeline/tea/dist/loader';
import '@wizeline/tea/dist/wizeline-tea.css';
```

#### Setup

Wizeline Tea is a zero config design system! All you need to do is to tell the browser that there are new custom elements available.

Before your Vue instance(`new Vue(...)`), add

```code
defineCustomElements(window);
```

And you are good to go.
