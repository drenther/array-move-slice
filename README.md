# array-move-slice

> Move a slice of an array to a different position in the array

Very similar to [array-move](https://github.com/sindresorhus/array-move) but with this package you can move single element or a slice of elements (only continuous slices though). If you need to move multiple items that are not in sequence try using [array-move-multiple](https://www.npmjs.com/package/array-move-multiple)

## Install

```sh
$ npm install array-move-slice
```

## Usage

```js
const input = ['a', 'b', 'c', 'd', 'e'];

// moving single item
const array1 = arrayMoveSlice(input, 1, 2);
console.log(array1);
// ["a", "c", "b", "d", "e"]

// moving a slice of items
const array2 = arrayMoveSlice(input, 1, 2, 2);
console.log(array2);
// ["a", "c", "d", "b", "e"]

// using -ve value to move a slice to end of the array
const array3 = arrayMoveSlice(input, -1, 0, 3);
console.log(array3);
// ["d", "e", "a", "b", "c"]

// using -ve value for fromIndex to move a slice from the end of the array
const array4 = arrayMoveSlice(input, 0, -1, 2);
console.log(array4)
// ["e", "a", "b", "c", "d"]
```

## API Reference

### arrayMoveSlice(array, to, from, count)

Clones the given `array`, moves the item / slice of items (if a non-zero `count` parameter value is passed) to a new position in the new array. The given `array` is not mutated.

### arrayMoveSliceMutate(array, to, from, count)

Same as `arrayMoveSlice` but it mutates the `array` passed to it. Useful for operating on huge arrays where performance can become a factor.

#### Params

**array** - Type `Array<any>` - the array to be operated on

**to** - Type `number` - the index of where the item / slice of items need to be moved to. If negative, it will be used as an offset from the end (like the native `Array.prototype.slice` method).

**from** - Type `number` - the index of the item / start of the slice of items that need to be moved. If negative, it will be used as an offset from the end (like the native `Array.prototype.slice` method).

**count** - Type `number` or `undefined` - the number of elements to be moved in the slice. It is optional and defaults to `1`. If a value is passed, it must be more than one.