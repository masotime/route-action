export const ACTION_TYPE = '@@redouter/ROUTE';
export const create = ({ url, method, body, headers })=> ({
	type: ACTION_TYPE, url, method, body, headers
});

export const isRouteAction = (action = {}) => action.type === ACTION_TYPE;

export const helpers = {
	GET: ({ url, headers = {} }) => create({ method: 'GET', url, headers}),
	POST: ({ url, body = {}, headers = {} }) => create({ method: 'POST', url, body, headers})
};