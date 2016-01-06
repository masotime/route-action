# route-action

This is a simple redux action creator with some helpers to create route actions. Route actions are an attempt to create a universal concept of HTTP requests to the client.

Since an HTTP server has the native concept of a HTTP requests, this is not really needed server side. As a caution, it is also dangerous to take route actions sent by the client as authoritative - always recreate the route action parameter such as method and headers manually server-side to prevent unauthorized access attempts.

## api

* `ACTION_TYPE` string constant representing the action type.
* `create({ url, method, body, headers })` convenience method to quickly create a route action.
* `helpers.GET({url, headers})` convenience menthod to quickly create a GET route action.
* `helpers.POST({url, body, headers})` convenience method to quickly create a POST route action.
