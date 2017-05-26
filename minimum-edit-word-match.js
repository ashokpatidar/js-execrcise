var word1 = 'abc';
var word2 = 'adc';
var t = [[]];

WordMatch(word1, word2);

function WordMatch(word1, word2) {

    for (i = 0; i <= word1.length; t[i] = [i++]);
    for (j = 0; j <= word1.length; t[0][j] = j++);
    
    for (var i = 0; i < word1.length + 1; i++) {
        for (var j = 0; j < word2.length + 1; j++) {
            //t[i][j] = 0;
            if (i == 0 && j == 0) {
                t[i][j] = 0;
            } else if (i == 0) {
                t[i][j] = t[i][j - 1] + 1;
            } else if (j == 0) {
                //t[i][j] = 0;
                t[i][j] = t[i - 1][j] + 1;
            } else if (word1[i - 1] == word2[j - 1]) {
                t[i][j] = t[i - 1][j - 1];
            } else {
                t[i][j] = 1 + Math.min(t[i][j - 1], t[i - 1][j], t[i - 1][j - 1]);
            }
        }
    }
    return t;
}

console.log(t)

// if in the table we move digonally then their is subitute
// from left to right their is insertion
// top to down deletion
// https://www.youtube.com/watch?v=b6AGUjqIPsA




