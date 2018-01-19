
**Note:** When the size property is not specified or an invalid size is specified the `<Icon />` component will use the default size. 

The default size is currently set to `xsmall`.

```jsx
<div>
  <h3>Size Cases</h3>
  <table>
    <tbody>
      <tr>
        <th>default</th>
        <th>xlarge</th>
        <th>large</th>
        <th>medium</th>
        <th>small</th>
        <th>xsmall</th>
        <th>404</th>
      </tr>
      <IconRow name="add-item" />
      <IconRow name="add-people" />
      <IconRow name="arrow-down" />
      <IconRow name="bell" />
      <IconRow name="book" />
      <IconRow name="building" />
      <IconRow name="calendar" />
      <IconRow name="check" />
      <IconRow name="credit-card" />
      <IconRow name="cross" />
      <IconRow name="dots-h" />
      <IconRow name="duplicate" />
      <IconRow name="flag" />
      <IconRow name="heart" />
      <IconRow name="info" />
      <IconRow name="magnifier" />
      <IconRow name="lock" />
      <IconRow name="plus" />
      <IconRow name="pencil" />
      <IconRow name="people" />
      <IconRow name="trash" />
    </tbody>
  </table>
</div>
```

```jsx
  <div>
    Icons<br />
    <Icon name="add-item" />add-item<br />
    <Icon name="add-people" />add-people<br />
    <Icon name="arrow-down" />arrow-down<br />
    <Icon name="bell" />bell<br />
    <Icon name="book" />book<br />
    <Icon name="building" />building<br />
    <Icon name="calendar" />calendar<br />
    <Icon name="check" />check<br />
    <Icon name="credit-card" />card<br />
    <Icon name="cross" />cross<br />
    <Icon name="dots-h" />dots-h<br />
    <Icon name="duplicate" />duplicate<br />
    <Icon name="flag" />flag<br />
    <Icon name="heart" />heart<br />
    <Icon name="info" />info<br />
    <Icon name="magnifier" />magnifier<br />
    <Icon name="lock" />lock<br />
    <Icon name="plus" />plus<br />
    <Icon name="pencil" />pencil<br />
    <Icon name="people" />people<br />
    <Icon name="trash" />trash<br />
  </div>
```

**Note:** When the name property is not specified or an invalid name is specified the `<Icon />` component will not render any component. 

In these cases `null` is returned.

```jsx
<div>
  <h3>Name Error Cases</h3>
  <table>
    <tbody>
      <tr>
        <th>undefined</th>
        <th>404</th>
      </tr>
      <tr>
        <td><Icon /></td>
        <td><Icon name="MISSINGNO" /></td>
      </tr>
    </tbody>
  </table>
</div>
```
