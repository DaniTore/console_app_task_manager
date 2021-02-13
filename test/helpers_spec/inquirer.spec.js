const assert = require('mocha').assert
const opt = require('../../dist/helpers/inquirer');

describe('inquirer', function() {
    it('result shuld be not null ', async function() {
        const result = await opt.inquireMenu().result;
        assert.isUndefined(result, "[message]");;
    })
})