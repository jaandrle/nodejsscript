import * as _ from "./_index.d";
declare global{
	var echo: typeof _.echo;
	var $: typeof _.$ & string[];
	var pipe: typeof _.pipe;
	var s: typeof _.s;
	/**
	 * A wrapper around the [node-fetch](https://www.npmjs.com/package/node-fetch) package.
	 *
	 * ```js
	 * // BASIC
	 * const response1= await fetch('https://medv.io');
	 * // PROMISE CHAINING
	 * const text1= await fetch('https://github.com/').then(r=> r.text());
	 * // AWAITING
	 * const response2= await fetch('https://api.github.com/users/github');
	 * const json1= await response.json();
	 * // POST METHOD
	 * const json2= await fetch('https://httpbin.org/post', { method: 'POST', body: 'a=1' }).then(r=> r.json());
	 * // POST METHOD WITH JSON
	 * const response3= await fetch('https://httpbin.org/post', {
	 * 	method: 'post',
	 * 	body: JSON.stringify({ a: 1 }),
	 * 	headers: {'Content-Type': 'application/json'}
	 * });
	 * // ERRORS
	 * fetch('https://domain.invalid/').catch(echo);
	 * try{
	 *	await fetch('https://domain.invalid');
	 * } catch(error){
	 *	echo(error);
	 * }
	 * ```
	 *
	 * @param url The URL to fetch.
	 * @param init Request parameters.
	 * @category Public 
	 */
	function fetch(url: string | _.__fetch.Request, init?: _.__fetch.RequestInit): _.__fetch.Response;
}
