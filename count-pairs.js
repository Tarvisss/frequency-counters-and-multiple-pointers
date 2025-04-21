// add whatever parameters you deem necessary
function countPairs(intArr, targetNum) {
    // A Set to store numbers we've already seen while looping
    let seenNums = new Set();
    
    // Counter to keep track of valid pairs
    let count = 0;

    // Loop through each number in the array
    for (let num of intArr) {
        // Calculate the number needed to reach the target
        let complement = targetNum - num;

        // If we've already seen the complement, we found a pair!
        if (seenNums.has(complement)) {
            count++; // Increase the count of valid pairs
        }

        // Add the current number to the set so it can be used in future pair checks
        seenNums.add(num);
    }

    // Return the total count of valid pairs found
    return count;
}
