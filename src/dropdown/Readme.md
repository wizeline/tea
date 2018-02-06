## Dropdowns

Pass options as children enforcing to use an Option component. If we pass the icon prop select value is not shown.

### example 1: Simple dropdown

Shows a simple dropdown with a label.

```javascript

const handleChange = (value) => {
 
};

<Select
	onChange={handleChange}
>
	<Select.Option value="01">Value 01</Select.Option>
	<Select.Option value="02">Value 02</Select.Option>
	<Select.Option value="03">Value 03</Select.Option>
	<Select.Option value="04">Value 04</Select.Option>
	<Select.Option value="05">Value 05</Select.Option>
</Select>
	
```

### example 2: Icon dropdown with groups

Shows the icon and the selected label.

```javascript

const handleChange = (value) => {
 
};

<Select
	onChange={handleChange}
	icon={IconComponent}
>
	<Select.Option value="01">Value 01</Select.Option>
	<Select.Option value="02">Value 02</Select.Option>
	<Select.Option value="03">Value 03</Select.Option>
	<Select.Option value="04">Value 04</Select.Option>
	<Select.Option value="05">Value 05</Select.Option>
</Select>
	
```

### example 3: Only icon dropdown with groups

Only shows the icon in the header.

```javascript

const handleChange = (value) => {
 
};

<Select
	onChange={handleChange}
	icon={IconComponent}
	onlyIcon
>
   <Select.Group title="Notifications">
		<Select.Option value="01">Value 01</Select.Option>
		<Select.Option value="02">Value 02</Select.Option>
		<Select.Option value="03">Value 03</Select.Option>
		<Select.Option value="04">Value 04</Select.Option>
		<Select.Option value="05">Value 05</Select.Option>
	</Select.Group>
</Select>
	
```

