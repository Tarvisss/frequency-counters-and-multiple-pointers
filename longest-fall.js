// Write a function called longestFall, which accepts an array of integers,
// and returns the length of the longest consecutive decrease of integers.

function longestFall(intArr) {
    let currentStreak = 1; // Tracks the current streak of decreasing numbers
    let longestStreak = 1; // Stores the longest streak found so far

    // If the array is empty, return 0 immediately
    if (intArr.length === 0) return 0;

    // Loop through the array starting from index 1
    // (since we need to compare each element with the previous one)
    for (let i = 1; i < intArr.length; i++) {
        // Compare current element with the previous one
        if (intArr[i] < intArr[i - 1]) {
            // If it's smaller, increment the current streak
            currentStreak++;
        } else {
            // Otherwise, reset the streak
            currentStreak = 1;
        }

        // Update the longest streak if current is greater
        if (currentStreak > longestStreak) {
            longestStreak = currentStreak;
        }
    }

    // Return the longest decreasing streak found
    return longestStreak;
}
