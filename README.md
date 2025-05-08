# Project: Falcon-A1

## Q1. Explain the difference between any, unknown, and never types in TypeScript.

### `any` type: 
In typescript any type is a type when we disable all the type checking.

Example:
```typescript
let value: any;

value = 10;           // No Error
value = "hello";      // No Error
value = true;         // No Error
value = { any: 1 };   // No Error
```

Now if for any of the value we call `Math.sqrt(value)` then at compile time it will not complain but at runtime it might give us unexpected results!
Basically when we're using any type we are telling the Typescript compiler that we know what we're doing, so just keep trust on the developer.

### `unknown` type: 
`unknown` type is counterpart of `any` type the differance is it is type-safe. 
The value of the unknown type can be anything but we've check the type before using it.

```typescript
let value: unknown;

value = 10;
value = 'hello';
value = { unknown: 1};
```
Now if I call value.toUpperCase() after 1st and 3rd line then the compiler will complain as we're not checking if the type of the value is string or not.
so the correct way should be
```typescript
if (typeof value === 'string') {
    console.log(value.toUpperCase());
}
```

### `never` type:
`never` type in TS represent value that will never occur.
For example:
```typescript
function alwasyThrowsError(value: number): never {
    throw new Error(value);
}
```
In the above function whatever the value of function parameter is we're always returning an Error. `never` type is suitable for function or expression that does not return anything not even `undefined

| Feature                  | `any`                                | `unknown`                   | `never`                              |
|--------------------------|--------------------------------------|-----------------------------|--------------------------------------|
| Accepts any value        | Yes                                  | Yes                         | No                                   |
| Type safety              | No                                   | Yes                         | Yes                                  |
| Suitable for / Use cases | Disable type checks, Quick protyping | Safely handle unknown input | Values that never occur (e.g. errors) |


## Q2: What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

In TypeScript, enums are used to define a set of named constants, which are a way of giving nice names to sets of numeric or string values. They're particularly handy for status codes, user roles, directions, and any fixed set of connected variables. Enum provides better type safety and better code organization and also improves code readability.

### Numeric Enum Example:
```typescript
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

console.log(Day.Friday) // OUTPUT: 4
```

### String Enum Example:
```typescript
enum Status {
    Todo = 'TODO',
    InProgress = 'IN_PROGRESS',
    Done = 'DONE'
}

console.log(Status.Done); // OUTPUT: 'DONE'
```