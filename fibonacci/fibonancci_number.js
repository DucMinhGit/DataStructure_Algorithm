function fibonancci(n) {
    if (n <= 1) {
        return n;
    }

    let prev1 = 0;
    let prev2 = 1;
    let result = 0;

    for (let i = 2; i <= n; i++) {
        result = prev2 + prev1;
        prev1 = prev2;
        prev2 = result
    }

    return result;
}
