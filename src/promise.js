/**
 * promise
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 
 * object that represents the eventual result of an async operation
 * contains information of an operation and tracks it's status
 * has a state property that can be PENDING, FULFILLED or REJECTED
 * has a result property which start as undefined and can be given a value base on the operation
 * 
 * when the async operation completes the promise executes one of two methods
 * resolve meaning that the operation was sucessful { state: "fulfilled", result: value }
 * reject meaning that an error occured { state: "rejected", result: error }
 * 
 * these method change the state and result properties to reflect the outcome of the operation
 * 
 * became part of JS in 2015 and are supported by all modern browsers
 * https://caniuse.com/#search=promises
 * 
 * Polyfilling promises
 * https://github.com/taylorhakes/promise-polyfill
 * IE8+, Chrome, Firefox, IOS 4+, Safari 5+, Opera
 * 
 * npm install promise-polyfill --save-exact
 */

 let everthingWorked;
 let error; 

 function successHandler(result) {
     console.log('Success', result);
 }

 function failHandler(error) {
     console.log('Error', error);
 }

 // example - promise constructor
 let promise = new Promise(function (resolve, reject) {

     // do something
     // you put code within a promise to do anything you want 
     // but it's most useful with an async operation
     // when promise resolves the result is returned
     // when promise rejects the error is returned
     if (everthingWorked) {
         resolve(result);
     } else {
         reject(error)
     }
 });

 // promise syntax allows for additional methods to be chained to 
 // the original promise
 promise
    .then(function(result) {
        // do something else with result
        return result;
    })
    .then(function(newResult) {
        // do something with new result
        successHandler(newResult)
    });

// instead of resolving a promise that doesn't successfully 
// complete can reject
// catch method is for error handling
promise
    .then((result) => {
        // do something else with result
        return result;
    })
    .catch((error) => {
        // deal with error
        failHandler(error);
    });

// we have the `.finally()` which is call no matter 
// the promise resolved or rejected
promise
    .then((result) => {
        // do something else with result
        return result;
    })
    .catch((error) => {
        // deal with error
        failHandler(error);
    })
    .finally((result) => {
        // deal with error
        console.log(result)
    });

    
 // we have the `.all()` which waits on all promises
 // to finish before moving on
 Promise.all([ /* promise1, promise2, promise3 */ ])
    .then((results) => {
        return results.map((result) => {
            // do something with array of results
        });
    });