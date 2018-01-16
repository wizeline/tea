## Proposed Icon API

Interface inspired by [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons).

### Icon

`<Icon />` contains SVG contents that scales up uniformly to fit the `<Icon />` container size.
The SVG contents displays centered within the `<Icon />` container.

| Property      | Value Type | Value                                  |
|:-------------:|:----------:|:--------------------------------------:|
| name          | string     | Name of icon to display in container   |
| size          | string     | See possible size values below         |
| color         | string     | CSS Color String of the SVG fill color |

| Size Value    | Container Size | SVG Content Size  |
|:-------------:|:--------------:|:-----------------:|
| xsmall        | 16px           | 16px              |
| small         | 24px           | 24px              |
| medium        | 32px           | 32px              |
| large         | 48px           | 48px              |
| xlarge        | 56px           | 56px              |

#### Icon Code Examples

```jsx
<Icon />
<Icon name=”plus” size=”xsmall” color={ colors.darkSkyBlue } />
```

### CircleIcon

`<CircleIcon />` wraps the `<Icon />` component and displays a circle background behind the contents in the `<Icon />` component.
The `<Icon />` component displays centered within the `<CircleIcon />` wrapper.

| Property      | Value Type | Value                                     |
|:-------------:|:----------:|:-----------------------------------------:|
| name          | string     | Name of icon to display in container      |
| size          | string     | See possible size values below            |
| color         | string     | CSS Color String of the SVG fill color    |
| background    | string     | CSS Color String of the circle background |

| Size Value    | Container Size | SVG Content Size  | Uniform Side Padding  |
|:-------------:|:--------------:|:-----------------:|:---------------------:|
| xsmall        | 32px           | 16px              | 8px                   |
| small         | 48px           | 24px              | 12px                  |
| medium        | 56px           | 32px              | 12px                  |

#### CircleIcon Code Examples

```jsx
<CircleIcon />
<CircleIcon name=”plus” size=”small” color={ colors.darkSkyBlue } />
```

### Other Considerations

Allowing consumers to specify a CSS based sizing value for the size property was also considered.
