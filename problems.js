// 🤌🏼 Solve Me First
// function solveMeFirst(a, b) {
//     return a + b;
// }

// 🤌🏼 Simple Array Sum
// function simpleArraySum(arr) {
//     const sum = arr.reduce((sum, num) => sum + num, 0);
//     return sum;
// }

// 🤌🏼 Compare Triplets
// function compareTriplets(a, b) {
//     let score = [0, 0];

//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === b[i]) {
//             continue;
//         } else if (a[i] > b[i]) {
//             score[0] += 1;
//         } else score[1] += 1;
//     }

//     return score;
// }

// 🤌🏼 A Very Big Sum
// function aVeryBigSum(arr) {
//     // Write your code here
//     const sum = arr.reduce((sum, num) => sum + num, 0);
//     return sum;
// }

// 🤌🏼 Diagonal Difference
function diagonalDifference(arr) {
    // Write your code here
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let i = 0; i < arr.length; i++) {
        primaryDiagonal += arr[i][i];
        secondaryDiagonal += arr[i][arr.length - i - 1];
        continue;
    }

    let answer = primaryDiagonal - secondaryDiagonal;

    if (answer < 0) {
        answer = answer * -1;
        return answer;
    }
    return answer;
}
