// Check if the browser supports Web Workers
if (typeof(Worker) !== "undefined") {
  // Create a Web Worker from an external script
  const fibonacciWorker = new Worker("fibonacciWorker.js");

  // Function to calculate Fibonacci using Web Worker
  function calculateFibonacci() {
    const numberInput = document.getElementById("numberInput").value;
    console.log(numberInput)
    fibonacciWorker.postMessage(numberInput);
  }

  // Listen for messages from the Web Worker
  fibonacciWorker.onmessage = function(event) {
    document.getElementById("result").innerHTML = `Fibonacci: ${event.data}`;
  };
} else {
  document.getElementById("result").innerHTML = "Web Workers are not supported in this browser.";
}
