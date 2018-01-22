
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
      <tr>
        <td><SquareIcon name="plus" /></td>
        <td><SquareIcon name="plus" size="xlarge" /></td>
        <td><SquareIcon name="plus" size="large" /></td>
        <td><SquareIcon name="plus" size="medium" /></td>
        <td><SquareIcon name="plus" size="small" /></td>
        <td><SquareIcon name="plus" size="xsmall" /></td>
        <td><SquareIcon name="plus" size="MISSINGNO" /></td>
        <td>plus</td>
      </tr>
    </tbody>
  </table>
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
        <td><SquareIcon /></td>
        <td><SquareIcon name="MISSINGNO" /></td>
      </tr>
    </tbody>
  </table>
</div>
```
