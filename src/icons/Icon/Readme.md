### Icons without any background or padding
```jsx
<div>
  <Icon name="add-item" xlarge color="red" />
  <Icon name="add-item" large />
  <Icon name="add-item" medium />
  <Icon name="add-item" small />
  <Icon name="add-item" xsmall />
</div>
```

### Icons with a circle background and padding
```jsx
<div>
  <Icon large round name="add-item" />
  <Icon medium round name="add-item"/>
  <Icon small round name="add-item"/>
</div>
```

### Color overrides
```jsx
<div>
  <Icon
    large
    round
    name="flag"
    color="blue"
    background="yellow"
  />
  <Icon
    large
    name="heart"
    color="hotpink"
  />
</div>
```