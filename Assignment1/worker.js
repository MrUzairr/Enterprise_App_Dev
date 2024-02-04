// Listen for messages from the main thread
self.onmessage = function (number) {
  // Function to calculate Fibonacci

  if (number.data <= 1) {
    result = number.data;
  }

  let fib = [0, 1];
  for (let i = 2; i <= number.data; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  const result = fib[number.data];
  // Send the result back to the main thread
  self.postMessage(result);
};
