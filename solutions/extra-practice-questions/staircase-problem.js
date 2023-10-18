function printStairs(n) {
  for (let i = 1; i <= n; i++) {
    const spaces = ' '.repeat(n - i);
    const steps = '#'.repeat(i);
    console.log(spaces + steps);
  }
}

printStairs(2);
printStairs(3);
