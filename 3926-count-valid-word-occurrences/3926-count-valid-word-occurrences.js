/**
 * @param {string[]} chunks
 * @param {string[]} queries
 * @return {number[]}
 */
var countWordOccurrences = function(chunks, queries) {
    // 1. Concatenate the chunks
    const s = chunks.join("");
    const n = s.length;
    
    // 2. Extract valid words
    const wordCounts = new Map();
    let currentWord = "";

    for (let i = 0; i < n; i++) {
        const char = s[i];

        if (/[a-z]/.test(char)) {
            // It's a lowercase letter, add to current word
            currentWord += char;
        } else if (char === '-') {
            // Check if it's a "Joiner Hyphen"
            const prev = s[i - 1];
            const next = s[i + 1];
            
            if (prev && next && /[a-z]/.test(prev) && /[a-z]/.test(next)) {
                // It's a joiner!
                currentWord += char;
            } else {
                // Not a joiner, treat as separator
                processWord(currentWord, wordCounts);
                currentWord = "";
            }
        } else {
            // Any other character is a separator
            processWord(currentWord, wordCounts);
            currentWord = "";
        }
    }
    
    // Catch the last word if the string didn't end with a separator
    processWord(currentWord, wordCounts);

    // 3. Map queries to counts
    return queries.map(q => wordCounts.get(q) || 0);
};

// Helper to update the frequency map
function processWord(word, map) {
    if (word.length > 0) {
        map.set(word, (map.get(word) || 0) + 1);
    }
}