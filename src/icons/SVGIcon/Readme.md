
**Note:** When the size property is not specified or an invalid size is specified the `<Icon />` component will use `xsmall`, the default size.

```jsx
<div>
  <h3>Sizes</h3>
  <table>
    <tbody>
      <tr>
        <th>default</th>
        <th>xlarge</th>
        <th>large</th>
        <th>medium</th>
        <th>small</th>
        <th>xsmall</th>
        <th>invalid</th>
      </tr>
      <SVGIconRow name="add-item" />
      <SVGIconRow name="add-people" />
      <SVGIconRow name="arrow-down" />
      <SVGIconRow name="bell" />
      <SVGIconRow name="book" />
      <SVGIconRow name="building" />
      <SVGIconRow name="calendar" />
      <SVGIconRow name="check" />
      <SVGIconRow name="credit-card" />
      <SVGIconRow name="cross" />
      <SVGIconRow name="dots-h" />
      <SVGIconRow name="duplicate" />
      <SVGIconRow name="flag" />
      <SVGIconRow name="heart" />
      <SVGIconRow name="info" />
      <SVGIconRow name="magnifier" />
      <SVGIconRow name="lock" />
      <SVGIconRow name="plus" />
      <SVGIconRow name="pencil" />
      <SVGIconRow name="people" />
      <SVGIconRow name="trash" />
    </tbody>
  </table>
</div>
```

**Note:** When the name property is not specified or an invalid name is specified the `<Icon />` component will not render any component. 

In these cases `null` is returned and the component is not rendered.

```jsx
<div>
  <h3>Name Error Cases</h3>
  <table>
    <tbody>
      <tr>
        <th>Undefined</th>
        <th>Invalid Name</th>
      </tr>
      <tr>
        <td><SVGIcon /></td>
        <td><SVGIcon name="MISSINGNO" /></td>
      </tr>
    </tbody>
  </table>
</div>
```

```jsx
  <div>
    Icons<br />
    <SVGIcon name="add-item" />add-item<br />
    <SVGIcon name="add-people" />add-people<br />
    <SVGIcon name="arrow-down" />arrow-down<br />
    <SVGIcon name="bell" />bell<br />
    <SVGIcon name="book" />book<br />
    <SVGIcon name="building" />building<br />
    <SVGIcon name="calendar" />calendar<br />
    <SVGIcon name="check" />check<br />
    <SVGIcon name="credit-card" />card<br />
    <SVGIcon name="cross" />cross<br />
    <SVGIcon name="dots-h" />dots-h<br />
    <SVGIcon name="duplicate" />duplicate<br />
    <SVGIcon name="flag" />flag<br />
    <SVGIcon name="heart" />heart<br />
    <SVGIcon name="info" />info<br />
    <SVGIcon name="magnifier" />magnifier<br />
    <SVGIcon name="lock" />lock<br />
    <SVGIcon name="plus" />plus<br />
    <SVGIcon name="pencil" />pencil<br />
    <SVGIcon name="people" />people<br />
    <SVGIcon name="trash" />trash<br />
  </div>
```