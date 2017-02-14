const assert = require('chai').assert

describe('array', () => {
    describe('#indexOf', () => {
        it('should return -1 when the value isn\'t present', () => {
            assert.equal(-1, [1,2,3].indexOf(4))
        })
    })
})
