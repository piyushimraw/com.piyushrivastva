---
title: Throttle vs debounce
date: "2020-01-03"
slug: "throttle-vs-debounce"
previewImage: "/images/articles/article-preview.png"
description: "Difference between throttle and debounce and their implementation"
category: weekly-notes
tags:
  - Javascript
  - Debounce
  - Throttle

---

## Spotlight

Throttle and Debounce are two ways to ways to optimise event handling in javascript.
These function can control respose rate of handlers to an event. I.E we can control how many times handler function or some other function call in handler function should be called on each event handler callback.
Let's understand how these two work.

## Throttle

It's a function which takes two arguments `function throttle(func, delay)` where `func` is actual function that needs to be throttled and `delay` is duration after which this function gets executed.

Now `throttle` will return a function, which we can call and pass some arguments.

`func` will be called only after `delay` doesn't matter how often we call that function.

> throttled function are called once per `T` amount of time and any additional calls within specified time will be ignored.

#### Use Scenario

As it can consistently call a function for recurring and frequent operation.
We can use `throttle`, when we want a consistent function execution within a given timeframe.

#### Common Use Cases

- Any Consistent UI Update after `resize`.
- Computation on client or server side.


#### Implementation


```js
/**
 *
 *
 * @param {(arg: any) =>  void} func
 * @param {Number} delay time in ms
 */
function throttle(func, delay) {
  let canCall = true;
  return function (...args) {
    if (canCall) {
      func.apply(this, args);
      // subsequent calls will be skipped until canCall is true again
      canCall = false;
      setTimeout(function () {
        // set canCall flag to handle next invockation
        canCall = true;
      }, delay);
    }
  };
}

const throttledLog = throttle(
  (name) =>
    console.log(`Hi ${name},
    Logged At ${new Date().toLocaleTimeString()}`),
  2000
);
setInterval(() => throttledLog('Piyush'), 100);
```

Output

```
Hi Piyush, Logged At 02:11:43
Hi Piyush, Logged At 02:11:45
Hi Piyush, Logged At 02:11:47
Hi Piyush, Logged At 02:11:49
```