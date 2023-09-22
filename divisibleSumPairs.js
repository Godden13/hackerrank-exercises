
function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let newN = 0

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        newN = newN + 1
      }
    }
  }
  return newN
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))