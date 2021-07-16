
// Rule1: Worst Case 
// 1. Always think about the worst Case, in terms of O(n)2
// 2. In the below example the worst case scenario would be what if nemo is the last(var nemoLast) element in the list, then for loop as to iterate over each and every element of the list, thats the worst case scenario that we can think of here! 



const { performance } = require('perf_hooks');

const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const nemoLast = ['dory', 'bruce', 'marlin', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank', 'nemo'];

function findNemo(fish) {
  let t0 = performance.now();
  for (let i = 0; i < fish.length; i++) {
    console.log('running...');
    if (fish[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}
findNemo(nemoLast); 
