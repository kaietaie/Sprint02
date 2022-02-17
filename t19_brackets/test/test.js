var assert = require('assert');
let str = 3456,
    exp = /[()]/;

describe( 'String test', function() {
    describe( 'Containt "("', function() {
        it('should return -1 when the value is not present', 
            function(){
                
                assert.match(str, exp);
                
            });
    describe( 'NaN test', function() {
        it('Sting is not a NaN', function() {
            let type = typeof str;
            assert.equal(type , "string")
        }); 
    });
    });
});