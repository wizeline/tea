## Proposed Icon API

Interfaces inspired by [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons).

The SVG must display centered within each IconContainer and scaled up uniformly to fit the SVG Content Size.

### SquareIcon

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

#### SquareIcon Code Examples

```jsx
<SquareIcon />
<SquareIcon name=”plus” size=”xsmall” color={ colors.darkSkyBlue } />
```

### CircleIcon

| Property      | Value Type | Value                                     |
|:-------------:|:----------:|:-----------------------------------------:|
| name          | string     | Name of icon to display in container      |
| size          | string     | See possible size values below            |
| color         | string     | CSS Color String of the SVG fill color    |
| background    | string     | CSS Color String of the circle background |

| Size Value    | Container Size | SVG Content Size  |
|:-------------:|:--------------:|:-----------------:|
| xsmall        | 32px           | 16px              |
| small         | 48px           | 24px              |
| medium        | 56px           | 32px              |

#### CircleIcon Code Examples

```jsx
<CircleIcon />
<CircleIcon name=”plus” size=”small” color={ colors.darkSkyBlue } />
```

### Other Considerations

Allowing consumers to specify a CSS based sizing value for the size property was also considered.
