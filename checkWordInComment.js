/**
 * Checks if a specific word exists in a comment
 * @param {string} comment - The comment text to search in
 * @param {string} word - The word to search for
 * @returns {boolean} - Returns true if the word is found, false otherwise
 */
function checkWordInComment(comment, word) {
    // Convert both comment and word to lowercase for case-insensitive comparison
    const lowerComment = comment.toLowerCase();
    const lowerWord = word.toLowerCase();
    
    // Use word boundaries to match whole words only
    const regex = new RegExp(`\\b${lowerWord}\\b`, 'i');
    return regex.test(comment);
}

// Test cases
console.log("Testing word 'their' in various comments:");
console.log(checkWordInComment("Is their word in this comment?", "their")); // true
console.log(checkWordInComment("Is there a word in this comment?", "their")); // false
console.log(checkWordInComment("Their house is big", "their")); // true
console.log(checkWordInComment("They're coming over", "their")); // false
console.log(checkWordInComment("THEIR is capitalized", "their")); // true
console.log(checkWordInComment("The word is not here", "their")); // false

module.exports = checkWordInComment;
