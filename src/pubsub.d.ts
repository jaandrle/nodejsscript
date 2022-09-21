/**
 * Event info shared across multiple `publish` calls (e.g. topic name).
 */
export type Topic_info= {
	/** Event name/identification. */
	name?: string;
};
/**
 * Topic(s) options and topic **reference** to be used in subscribe/publish/… functions.
 */
export type Topic= {
	/** Event info shared across multiple `publish` calls (e.g. topic name). */
	info: Topic_info;
	/** Keep last published data and when new listener is registered call this function with kept data.
	 * @default false
	 * */
	cache?: boolean;
	/** Converts topic `data` from `publish` function to what listeners are expecting. (recommendation to use DATA_IN, DATA – see {@link Topic}) */
	mapper?: Function;
	/**
	 * Topic can be published only one time.
	 * @default false
	 * */
	once?: boolean;
	/** Use **only in documentation** to describe publish/subscribe data */
	DATA_IN?: any;
	/** Use **only in documentation** to describe publish/subscribe data */
	DATA?: any;
};

/**
 * Creates topic to be used in subscribe/publish/… functions.
 *
 * It is recommended to add JSDoc/Typescript property **DATA** to specify
 * expected data format/type (see {@link publish}/{@link Listener})
 * – see *example*.
 *
 * @param options See {@link Topic}
 * ```js
 * /**
 *  * Test
 *  * \@property {string} DATA
 *  *\/
 * const ontest= pubsub.topic({ cached: true });
 * ```
 * */
export function topic<T extends Topic>(options: T): T;
/**
 * Creates topic as [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * */
export function topicFromAbort(): AbortController;
/**
 * Creates topic from `setInterval`.
 * ```js
 * // original
 * const id= setInterval(echo, 750);
 * // …
 * clearInterval(id);
 * // now
 * const topic= pubsub.topicFromInterval(750);
 * pubsub.subscribe(topic, echo);
 * // …
 * pubsub.publishClose(topic);
 * ```
 * real live:
 * ```js
 * let iteration= 1;
 * const topic= pubsub.topicFromInterval(750, { mapper: ()=> iteration++ });
 * cli.rewritable({ topic });
 * // wordy/explicit
 * const topic_interval= pubsub.topicFromInterval(750);
 * const topic_log= cli.rewritable();
 * const { sub, pub }= pubsub;
 * sub(topic_interval, ()=> pub(topic_log, iteration++));
 * ```
 * */
export function topicFromInterval(interval: number, options?: Topic): Topic

/**
 * Publishes `data` for given `topic`.
 * @param data It is recommended to use `Topic.DATA` in Typescript/JSDoc to provide info about data type.
 * @throws {TypeError} Unregistered `topic`
 * @returns `0`= success / `1`= ‘once’ topic already published / error elsewhere.
 * */
export function publish(topic: Topic, data: any): Promise<0|1>
export { publish as pub };

/** Register `listener` function to be called when `topic` will be emitted.  */
export type Listener= (info: Topic_info, data: any)=> void | Promise<void>;
/**
 * Register `listener` function (subscriber) to be called when `topic` will be emitted.
 * @throws {TypeError} Unregistered `topic`
 * */
export function subscribe(topic: Topic, listener: Listener, options?: { once?: boolean }): Topic
export { subscribe as sub };

/**
 * Publishes ‘close’ event. All subscribers will be removed except those that was created by {@link subscribeClose}.
 * @param exit `0`= just close, `1`= imply error.
 * @throws {TypeError} Unregistered `topic`
 * @returns `0`= success / `1`= ‘once’ topic already published / error elsewhere.
 * */
export function publishClose(topic: Topic, exit: 0|1): Promise<0|1>
export { publishClose as pubC };

/**
 * Register `listener` function (subscriber) to be called when `topic` will be close via {@link publishClose}.
 * @throws {TypeError} Unregistered `topic`
 * */
export function subscribeClose(topic: Topic, listener: (exit: 0|1)=> void): Topic
export { subscribeClose as subC };
