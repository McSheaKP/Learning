// No! Fulfillment handlers may return promises or values. Your Promises
// library will do the correct thing and wrap your return value in a promise if
// need be. This is awesome because it allows you to intermix values with
// promises in a chain.

// Imagine that you have a cache of models that may already contain a model you
// would like to request from the server. You could check your cache
// synchronously and return the found value or send an AJAX request to your
// remote server to fetch it.

// Wrapping this functionality in a promise means that both behaviors can be
// consumed under a single abstraction:

//     doSomeSetup()
//       .then(function () {
//         return cache.fetchModel(id) || promisedAjax("users/" + id);
//       })
//       .then(displayUser)

// The key thing to understand here is that your handlers will wrap your
// return values in promises even if they are obtained synchronously.

// Another very important point to understand is that, as discussed before, the
// returned value will resolve on the next turn of the event loop.

// ## Task

// Construct a promise chain that returns values to prove to yourself that
// promise handlers will wrap your returned values in promises allowing
// additional chaining.

//   * Declare a function `attachTitle` which prepends `'DR. '` to its firstargument and returns the result.
//   * Create a fulfilled promise with a value of `'MANHATTAN'`.
//   * Build a promise chain off the promise we just constructed that first calls`attachTitle` then calls `console.log`.

// If your program runs successfully, it should print out “DR. MANHATTAN” which
// is extremely exciting.

