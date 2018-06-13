# Web calculator without library
- only used Math

## Documentation

##### getValue(obj) 
html code:
```
value="ln" onclick="getValue(this)"
```
Get value with input button. If you click button "ln" obj.value = "ln"
Next step i compare 
*   if obj.value = string run symbolOperation(obj.value);
*   else if obj.value = number run numberOperation(obj.value);

#### symbolOperation(obj.value);
I share string operation on two Operation:

##### symbol Operation : 
symbol operation doing here
```
С del .
```

##### math Operation
math operation doing at mathOperation()
```
- + ^ % / x sin cos tan ln e 
```
#### numberOperation(obj.value);
add next number at input

#### mathOperation();
At this function make math operation