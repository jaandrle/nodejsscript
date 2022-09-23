/* jshint ignore:start */
const AbortController= globalThis.AbortController || await import('abort-controller');
/* jshint ignore:end *//* global AbortController */
const listeners= new WeakMap();
const listeners_exit= new WeakMap();
const data_cached= new WeakMap();

export function topic(options= {}){
	listeners.set(options, new Set());
	return options;
}
export function topicFromAbort(){
	const options= new AbortController();
	options.once= true;
	topic(options);
	const onabort= publishClose.bind(null, options, 0);
	const onclose= ()=> (options.signal.removeEventListener("abort", onabort), options.abort());
	options.signal.addEventListener("abort", onabort);
	subscribeClose(options, onclose);
	return options;
}
export function topicFromInterval(interval, options= {}){
	const t= topic(options);
	const id= setInterval(publish.bind(null, t), interval);
	subscribeClose(t, clearInterval.bind(null, id));
	return t;
}

export async function publish(topic, data){
	if(testTopic(topic)) return 1;
	data= toEvent(topic, data);
	let promises= [];
	listeners.get(topic).forEach(function(f){
		const p= f(data);
		if(p instanceof Promise) promises.push(p);
	});
	if(promises.length) await Promise.all(promises);
	if(topic.cached) data_cached.set(topic, data);
	if(topic.once) listeners.delete(topic);
	return 0;
}
export const pub= publish;

export function subscribe(topic, listener, { once= false }= {}){
	if(typeof listener!=="function") throw new TypeError("Wrong `listener` type, it should be a function");
	if(topic.cached) listener(data_cached.get(topic));
	if(testTopic(topic)) return topic;
	if(!once){
		listeners.get(topic).add(listener);
		return topic;
	}
	listeners.get(topic).add(listenerOnce(listener));
	return topic;
}
export const sub= subscribe;
export function unsubscribe(topic, listener){
	return listeners.has(topic) ? listeners.get(topic).delete(listener) : undefined;
}
export const unsub= unsubscribe;
function listenerOnce(listener){
	return function listenerOnce(data){ listener(data); unsubscribe(topic, listenerOnce); };
}

export function subscribeClose(topic, listener){
	if(typeof listener!=="function") throw new TypeError("Wrong `listener` type, it should be a function");
	if(testTopic(topic)) return topic;
	const le_topic= listeners_exit.get(topic) || new Set();
	le_topic.add(listener);
	listeners_exit.set(topic, le_topic);
	return topic;
}
export const subC= subscribeClose;
export async function publishClose(topic, data){
	if(!data) data= 0;
	if(testTopic(topic)) return 1;
	let promises= [];
	listeners_exit.get(topic).forEach(function(f){
		const p= f(data);
		if(p instanceof Promise) promises.push(p);
	});
	if(promises.length) await Promise.all(promises);
	listeners_exit.delete(topic);
	listeners.delete(topic);
	return 0;
}
export const pubC= publishClose;

function toEvent({ info= {}, mapper }, data){
	if(mapper) data= mapper(data);
	return { info, data };
}
function testTopic(topic){
	if(listeners.has(topic)) return 0;
	if(topic.once) return 1;
	const topic_str= JSON.stringify(topic);
	throw new TypeError(`Given topic '${topic_str}' is not supported (see pubsub_TopicOptions). Topic are created via 'topic' function.`);
}
