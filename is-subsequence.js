// This function checks if all the characters in str1 appear in str2 *in the same order*.
// Characters don't have to be consecutive, but they must be in order.

function isSubsequence(str1, str2) {
    // Pointer for str1, starts at the beginning
    let firstStrPointer = 0;

    // Pointer for str2, also starts at the beginning
    let secondStrPointer = 0;

    // Loop through str2 until we reach the end
    while (secondStrPointer < str2.length) {

        // If the current character in str1 matches the current character in str2:
        if (str1[firstStrPointer] === str2[secondStrPointer]) {
            // Move the pointer for str1 forward (we've found a match!)
            firstStrPointer++;
        }

        // Always move the str2 pointer forward to continue scanning
        secondStrPointer++;
    }

    // After the loop, if we’ve matched all characters from str1 (i.e., pointer has reached the end of str1),
    // then str1 is a valid subsequence of str2
    if (firstStrPointer === str1.length) {
        return true;
    }

    // Otherwise, not all characters in str1 were found in order in str2
    return false;
}
