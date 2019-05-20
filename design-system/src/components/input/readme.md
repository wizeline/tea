# wz-input



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type      | Default     |
| ------------- | ------------- | ----------- | --------- | ----------- |
| `class`       | `class`       |             | `string`  | `undefined` |
| `disabled`    | `disabled`    |             | `boolean` | `false`     |
| `error`       | `error`       |             | `string`  | `undefined` |
| `name`        | `name`        |             | `string`  | `undefined` |
| `placeholder` | `placeholder` |             | `string`  | `undefined` |
| `type`        | `type`        |             | `string`  | `'text'`    |
| `value`       | `value`       |             | `string`  | `undefined` |


## Dependencies

### Depends on

- [wz-form-error](../formerror)

### Graph
```mermaid
graph TD;
  wz-input --> wz-form-error
  wz-form-error --> wz-error
  wz-error --> wz-text
  style wz-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
