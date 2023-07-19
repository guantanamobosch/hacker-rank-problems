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
//     const sum = arr.reduce((sum, num) => sum + num, 0);
//     return sum;
// }

// 🤌🏼 Diagonal Difference
// function diagonalDifference(arr) {
//     let primaryDiagonal = 0;
//     let secondaryDiagonal = 0;
//     for (let i = 0; i < arr.length; i++) {
//         primaryDiagonal += arr[i][i];
//         secondaryDiagonal += arr[i][arr.length - i - 1];
//         continue;
//     }

//     let answer = primaryDiagonal - secondaryDiagonal;

//     if (answer < 0) {
//         answer = answer * -1;
//         return answer;
//     }
//     return answer;
// }

// 🤌🏼 Plus Minus
// function plusMinus(arr) {
//     let positives = 0;
//     let negatives = 0;
//     let zeroes = 0;

//     arr.forEach((num) => {
//         if (num > 0) {
//             positives += 1;
//         } else if (num < 0) {
//             negatives += 1;
//         } else zeroes += 1;
//     });

//     if (arr.length < 2 && positives) {
//         console.log("1.000000");
//         console.log("0.000000");
//         console.log("0.000000");
//         return;
//     } else if (arr.length < 2 && negatives) {
//         console.log("0.000000");
//         console.log("1.000000");
//         console.log("0.000000");
//         return;
//     } else if (arr.length < 2 && zeroes) {
//         console.log("0.000000");
//         console.log("0.000000");
//         console.log("1.000000");
//         return;
//     } else if (positives && !negatives && !zeroes) {
//         console.log("1.000000");
//         console.log("0.000000");
//         console.log("0.000000");
//         return;
//     } else if (!positives && negatives && !zeroes) {
//         console.log("0.000000");
//         console.log("1.000000");
//         console.log("0.000000");
//         return;
//     } else if (!positives && !negatives && zeroes) {
//         console.log("1.000000");
//         console.log("0.000000");
//         console.log("0.000000");
//         return;
//     }

//     let positivesRatio = (positives / arr.length).toString();
//     let negativesRatio = (negatives / arr.length).toString();
//     let zeroesRatio = (zeroes / arr.length).toString();

//     if (positivesRatio.length > positivesRatio.indexOf(".") + 6) {
//         positivesRatio = positivesRatio.slice(
//             0,
//             positivesRatio.indexOf(".") + 7
//         );
//     } else
//         while (positivesRatio.length < positivesRatio.indexOf(".") + 7)
//             positivesRatio += "0";

//     if (negativesRatio.length > negativesRatio.indexOf(".") + 6) {
//         negativesRatio = negativesRatio.slice(
//             0,
//             negativesRatio.indexOf(".") + 7
//         );
//     } else
//         while (negativesRatio.length < negativesRatio.indexOf(".") + 7)
//             negativesRatio += "0";

//     if (zeroesRatio.length > zeroesRatio.indexOf(".") + 6) {
//         zeroesRatio = zeroesRatio.slice(0, zeroesRatio.indexOf(".") + 7);
//     } else
//         while (zeroesRatio.length < zeroesRatio.indexOf(".") + 7)
//             zeroesRatio += "0";

//     console.log(positivesRatio);
//     console.log(negativesRatio);
//     console.log(zeroesRatio);
// }

// 🤌🏼 Staircase
// function staircase(n) {
//     // hash counter
//     let hash = 1;

//     // loop through n times
//     for (let i = 0; i < n; i++) {
//         let str = "";
//         for (let j = 0; j < n; j++) {
//             if (j >= n - hash) {
//                 str += "#";
//                 continue;
//             }
//             str += " ";
//         }
//         console.log(str);
//         hash += 1;
//     }
// }

// 🤌🏼 Mini Max Sum
// function miniMaxSum(arr) {
//     arr.sort(function (a, b) {
//         return a - b;
//     });

//     const maxArr = arr.slice(1);
//     const minArr = arr.slice(0, arr.length - 1);

//     const maxSum = maxArr.reduce(
//         (accumulator, currentValue) => accumulator + currentValue
//     );

//     const minSum = minArr.reduce(
//         (accumulator, currentValue) => accumulator + currentValue
//     );

//     console.log(`${minSum} ${maxSum}`);
// }
