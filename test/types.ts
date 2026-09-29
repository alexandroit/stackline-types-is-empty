import isEmpty = require('__PACKAGE__');
const values: boolean[] = [isEmpty(), isEmpty(null), isEmpty({}), isEmpty([]), isEmpty('x'), isEmpty(0)];
// @ts-expect-error result is boolean, not a number
const count: number = isEmpty({});
