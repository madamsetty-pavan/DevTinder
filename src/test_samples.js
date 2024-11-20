// Simulate an asynchronous operation
function fetchData() {
    return new Promise(() => {
      setTimeout(() => {
        console.log("Data fetched!");
      }, 5000);
    });
  }
  
  // Async/Await
  async function fetchAndLogData() {
    console.log("Fetching data...");
    const data = await fetchData(); // Wait for the promise to resolve
    console.log(data); // Logs: "Data fetched!"
  }
  
  fetchAndLogData();
console.log("test");  