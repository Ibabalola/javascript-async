/**
 * async/await
 * 
 * became part of JS in 2017 and are supported by all mordern browsers
 * https://caniuse.com/#search=async%20await
 * 
 * Backwards compatability is dependant on
 * 
 * Polyfilling promises
 * https://github.com/taylorhakes/promise-polyfill
 * 
 * However before this can be used async await needs to be
 * transpilied into a promise using Babel
 * 
 * Use the async keyword as part of a function declaration or expression
 * to specify that the function should execute asynchronously
 * it should not block the parser's main process
 * 
 * Use the await keyword before a statement that returns a promise 
 * to indicate that the function should stop and wait for the result
 * of the promise before proceeding
 * 
 * Async / Await => are just syntantic sugar
 * Works with promises underneath the hood
 */

 const getData = () => {
     return 'data'
 };

 const foo = async () => {
    let data = await getData()
        .catch(e => {
            // error handler
        });
    return data;
 };

 // =

 let promise = new Promise()
    .then(result => {
        return (getData(result));
    });
