/*
"1. Rewrite the below using Async-Await syntax
```
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v)  // returns a promise
    })
}
``"
*/

async function func(url){
  try{
    let a= await downloadData(url);
    await processDataInWorker(a);
  }
  catch(error){
    await downloadFallbackData(url);
  }
  
}