function filter(arr: number[], fn: (n: number, i: number) => boolean): number[] {
    let filteredArr: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const fn = (n: number) => n % 2 === 0; // Keep even numbers

console.log(filter(arr, fn)); // [2, 4]

