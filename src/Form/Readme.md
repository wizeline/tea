### Behaviour
- The `<Form>` component is a stateful wrapper for the HTML `<form>` tag
- Its implementation can be similar to [this one](https://medium.com/front-end-hacking/html5-form-validation-in-react-65712f778196)

### API
- The handled props will be
  - `submit: function`, a prop used when the form is submitted

### Error handling
- Every child component of the `<Form>` should have a validity property so, the form can validate all of them using refs
- With the refs, the `<From>` component can change its class or call a prop function to alert its parent that a sumbition went wrong
- The `<Form>` then can change its state to display a submition error

### Form controls component
- Beacuse this proposal expects the child components to have a validity property, the best approach is to have controlled components, maybe HOCs so we can have the base `<Input>` and `<Button>` components and their `<Form>`-ready versions
