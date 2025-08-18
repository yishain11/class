export function add(a, b) {
    return a + b;
}

export function divide(a, b) {
    if (b === 0) throw new Error('Divide by zero');
    return a / b;
}