---
sidebar_position: 4
id: move
title: move
---

The `move` function repositions an item within an array from one index to another.

```js
function move(array: any[], moveIndex: number, toIndex: number): any[];
```

## Arguments

#### array [ any[] ]

The array containing the items to be moved.

#### moveIndex [ number ]

The index of the item to move within the array.

#### toIndex [ number ]

The index where the item should be moved to within the array.

## Returns

#### [ any[] ]

Returns a new array with the item moved from moveIndex to toIndex.

Example

```js
import { move } from 'react-ui-animate';

// Example usage
const fruits = ['Apple', 'Mango', 'Orange', 'Banana'];
const newOrder = move(fruits, 0, 1);
console.log(newOrder); // Output: ['Mango', 'Apple', 'Orange', 'Banana']
```

In this example, the `move` function moves the item at index `0` (Apple) to index `1` in the fruits array, resulting in ['Mango', 'Apple', 'Orange', 'Banana'].
