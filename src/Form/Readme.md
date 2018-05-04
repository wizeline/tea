### Glossary
- The prop names will be enforced with types

#### Input
- `name: string` the name of the input field
- `value: string` value of the field, the same as the native `html` attribute
- `readOnly: boolean` toggle whether the input can be modified by the user or not, the same as the native `readonly` `html` attribute
- `disabled: boolean` toggle whether the input is disabled or not, the same as the native `disabled` `html` attribute
- `autofocus: boolean` specifies that the input field should automatically get focus when the page loads
- `required: boolean` specifies that an input field must be filled out before submitting the form 
- `onChange: (event) => void` a callback function on the `onchange` `html` event
- `type: string` to choose the type of input, as to v1.0.0 the supported types will be:
  - `text`
  - `password`

##### Checkbox, Radio
- All of the `<Input>` props sans `type`
- `checked: boolean` to know whether to show the input as checked or not

##### Text, Password
- `size: number` number of characters that the input should be in length
- `maxLength: number` number of max characters that the input value should be in length
- `placeholder: string` place holder text to be shown
- `autocomplete: boolean` specifies whether a form or input field should have autocomplete on or off

##### Button
- Buttons created with the `html` `<button>` element are equal and richer than those created with a `<input type="submit" />` [[more info]](https://stackoverflow.com/questions/7117639/input-type-submit-vs-button-tag-are-they-interchangeable)
- The default type for a `<button>` is `submit`, so it is not necessary to add another element, Phoenix's `<Button>` component should work as expected in forms, with the option to add another prop to change its type e.g. `reset`
