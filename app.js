function analyzeRange(start, end) {
    if (start > end) {
        return "Invalid range";
    }

    let evenCount = 0;
    let oddCount = 0; 
    let evenSum = 0;
    let totalSum = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenCount++;
            evenSum += i;
        } else {
            oddCount++;
        }
        totalSum += i;
    }

    return `Range: ${start} to ${end} Evens: ${evenCount} Odds: ${oddCount} Even Sum: ${evenSum} Total Sum: ${totalSum}`;
}

const result = analyzeRange(1, 10);
console.log(result);

console.log(analyzeRange(5, 5));
console.log(analyzeRange(10, 1));

function countMultiples(start, end, divisor) {
    if (start > end) {
        return "Invalid range";
    }

    let count = 0;

    for (let i = start; i <= end; i++) {
        if (i % divisor === 0) {
            count++;
        }
    }

    return count;
}

const multiples = countMultiples(1, 10, 3);
console.log(`Multiples of 3 between 1 and 10: ${multiples}`);