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
    console.log(`Hi ${name}, Logged At ${new Date().toLocaleTimeString()}`),
  2000
);

setInterval(() => throttledLog('Piyush'), 100);
