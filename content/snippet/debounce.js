/**
 *
 * @param {(args: any) => void} func
 * @param {Number} delay - time in ms
 */
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    // clear previous timeout when function is called again
    clearTimeout(timeout);
    // timeout and schedule next function call if returning function is called again
    // this scheduled call will be cleared
    timeout = setTimeout(() => {
      timeout = null;
      return func.apply(this, args);
    }, delay);
  };
}

const debouncedLog = debounce(
  (name) =>
    console.log(`
    Hi ${name},
    called at ${new Date().toLocaleTimeString()}
`),
  900
);

setInterval(() => debouncedLog('Piyush'), 3000);
