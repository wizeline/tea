# wz-tag
## Description
I would like to have a tag component that supports:
- many design systems state (primary, positive, secondary, info, negatie, warning)
- removable ability

## DEVX
### Default
```

<wz-tag>
  This is a tag
</wz-tag>

[ This is a tag ]
```

### State

> filled= primary | info | warning | negative | positive
```
<wz-tag filled="info" >
  This is a tag
</wz-tag>

[ This is a tag ] // imagine it has color
```

### Ability

> removable
```
<wz-tag removable >
  This is a tag
</wz-tag>

[ This is a tag | x ]
```
