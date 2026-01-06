[**nodejsscript**](../README.md)

***

[nodejsscript](../README.md) / fetch

# Function: fetch()

> **fetch**(`url`, `init?`): [`Response`](../nodejsscript/namespaces/fetch/classes/Response.md)

The [node-fetch](https://www.npmjs.com/package/node-fetch)
package can be used in cases when `fetch` is not available natively.

```js
// BASIC
const response1= await fetch('https://medv.io');
// PROMISE CHAINING
const text1= await fetch('https://github.com/').then(r=> r.text());
// AWAITING
const response2= await fetch('https://api.github.com/users/github');
const json1= await response.json();
// POST METHOD
const json2= await fetch('https://httpbin.org/post', { method: 'POST', body: 'a=1' }).then(r=> r.json());
// POST METHOD WITH JSON
const response3= await fetch('https://httpbin.org/post', {
	method: 'post',
	body: JSON.stringify({ a: 1 }),
	headers: {'Content-Type': 'application/json'}
});
// ERRORS
fetch('https://domain.invalid/').catch(echo);
try{
	await fetch('https://domain.invalid');
} catch(error){
	echo(error);
}
```

## Parameters

### url

The URL to fetch.

`string` | [`Request`](../nodejsscript/namespaces/fetch/classes/Request.md)

### init?

[`RequestInit`](../nodejsscript/namespaces/fetch/interfaces/RequestInit.md)

Request parameters.

## Returns

[`Response`](../nodejsscript/namespaces/fetch/classes/Response.md)
