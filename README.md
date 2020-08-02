# Traditional JS Asynchronous Model

JavaScript includes a number of features that enable you to program asynchronously

* Callbacks
* Promises
* Async / Await

However the above still rely on the main browser thread to execute the code after any delay has taken place
such as a `setTimeout()` or a response to an ajax request.

It simply rearranges the order in which code is executed on a single thread to avoid blocking, but feature that use this model are limited by the fact that with a single thread the browser can only do one thing at a time.


# Web Workers
Allows developers to specify code that will be run in it own thread on the process seperate from the browser thread, this allows app to do multiple things at once by leveraging one or more additional processor threads.

App sends a message to code running in additional thread
does the requested work on its thread
then responds with it's own message,
which contains data that is in the app

```
browser thread  ------- request message ----->  processor thread
browser thread  <------ response message -----  processor thread
```

Used in apps that need to do complex mathmatical calculations, this helps
to free up the browser thread so the UI remain reponsive.

```
const worker = new Worker(script); // setup

// send data to web worker
// data can be a string, number or a collection (.e.g Array or object)
worker.postMessage(data); 

// In Web worker
this.addEventListener('message', function (e) {
    // get data from e.data
});

// send response message from worker
this.postMessage(data);

// In script on browser thread
worker.addEventListener('message', function (e) {
    // get data from e.data
});
```

# Web workers, service workers, and Web Sockets

## Shared Workers

To avoid duplicating resouces that need to shared by just sharing one extra thread, however they are wildly supporting by modern browsers

```
browser instances                  worker
                                   ________
instance <----------------------> |        |
instance <----------------------> |        |
instance <----------------------> |________|
```

## Service Worker

Like a web worker a service worker runs in a seperate thread, it is optimised to make network requests, monitor responses and work with those response all in the background.

## WebSocket

Maintains a persistent connection with a server and listens for updates, they do not run in a seperate thread so therefore has access to the DOM, you can using WebSocket to replace code that does polling.