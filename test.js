/* global describe it */
import { helpers, create, ACTION_TYPE, isRouteAction } from './src/index';
import assert from 'assert';

it('should have the correct action type', () => {
	assert.equal(ACTION_TYPE, '@@redouter/ROUTE');
});

describe('helpers', () => {

	it('should have a GET helper that produces a GET route action', () => {
		const sampleGET = helpers.GET({
			url: 'http://google.com/apple'
		});

		assert.equal(sampleGET.type, ACTION_TYPE);
		assert.equal(sampleGET.method, 'GET');
		assert.equal(sampleGET.url,'http://google.com/apple');
		assert.deepEqual(sampleGET.headers, {});
		assert.equal(sampleGET.body, undefined);

		const anotherGET = helpers.GET({
			url: 'http://www.paypal.com',
			headers: { 'Content-Type': 'application/json'}
		});

		assert.equal(anotherGET.headers['Content-Type'], 'application/json');

	});

	it('should have a POST helper that produces a POST route action', () => {
		const samplePOST = helpers.POST({
			url: 'http://google.com/apple'
		});

		assert.equal(samplePOST.type, ACTION_TYPE);
		assert.equal(samplePOST.method, 'POST');
		assert.equal(samplePOST.url,'http://google.com/apple');
		assert.deepEqual(samplePOST.headers, {});
		assert.deepEqual(samplePOST.body, {});

		const anotherPOST = helpers.POST({
			url: 'http://www.paypal.com',
			headers: { 'Content-Type': 'application/json'},
			body: {
				one: 1
			}
		});

		assert.equal(anotherPOST.headers['Content-Type'], 'application/json');
		assert.deepEqual(anotherPOST.body, {one: 1});

	});

});

describe('create', () => {
	it('should correctly create a route action', () => {
		const routeAction = create({
			method: 'HEAD',
			url: 'http://www.pineapple.com',
			headers: {
				'Authorization': 'Bearer Token XXX'
			}
		});

		assert.equal(routeAction.type, ACTION_TYPE);
		assert.equal(routeAction.method, 'HEAD');
		assert.equal(routeAction.url, 'http://www.pineapple.com');
		assert.equal(routeAction.headers.Authorization, 'Bearer Token XXX');

	});
});

describe('isRouteAction', () => {
	it('should correctly identify a route action', () => {

		assert(isRouteAction({ type: ACTION_TYPE, }));
		assert.equal(isRouteAction({type: 'ROUTE'}), false);

	});
});