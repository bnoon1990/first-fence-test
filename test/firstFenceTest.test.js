import myFunction from '../firstFenceTest.js';
import assert from 'assert';

// Test case 1
//assert it results in 8 for your example, will print error to console log if wrong
//assert.strictEqual(myFunction([1,2,3,4,5], 2), 8, 'Addition test failed');

//now i confirmed it did rightly fail test can check test passes by writing right example result 6
assert.strictEqual(myFunction([1,2,3,4,5], 2), 6, 'Addition test failed');


// Have ran it, it was blank, function confirmed correct, lets just do a couple of edge case
// lets try crazy big numbers to make sure
assert.strictEqual(myFunction([1,2,3,4,5,1000], 2), 1006, 'Addition test failed');

assert.strictEqual(myFunction([1,2,3,4,5,10000], 1000), 10000, 'Addition test failed');

//both passed, time to commit and sign off.  