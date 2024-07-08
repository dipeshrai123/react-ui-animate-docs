---
sidebar_position: 5
id: delay
title: delay
---

The `delay` function delays synchronous execution for the specified number of milliseconds.

```js
function delay(milliseconds: number): Promise<void>;
```

## Arguments

#### `milliseconds` [ number ]

The number of milliseconds to delay execution.

## Returns

#### `Promise<void>`

A promise that resolves after the delay is completed.

## Example

```js
import { delay } from 'react-ui-animate';

// Example usage
await delay(1000);
console.log('It will execute after 1000 milliseconds');
```

In this example, the `delay` function is used to wait for 1000 milliseconds before logging a message to the console. This can be particularly useful in scenarios where you need to introduce delays in asynchronous operations or simulate timed behavior in tests.
