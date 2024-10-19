


export const quickSort = arr => {

    // Use the spread operator (...) to clone the original array, arr.
    const a = [...arr];

    console.log(a);


    // If the length of the array is less than 2, return the cloned array.
    if (a.length < 2) return a;

    //Use Math.floor() to calculate the index of the pivot element.
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = a[pivotIndex];
    console.log("pivot: ", pivot);


    // Use Array.prototype.reduce() and Array.prototype.push() to split the array into two subarrays. The first one contains elements smaller than or equal to pivot and the second on elements greater than it. Destructure the result into two arrays.
    const [lo, hi] = a.reduce(

        (acc, val, i) => {

            if (val < pivot || (val === pivot && i != pivotIndex)) {
                acc[0].push(val);

            } else if (val > pivot) {
                acc[1].push(val);
            }

            return acc;
        },
        [[], []]
    );

    console.log("lo: ", lo);
    console.log("hi: ", hi);

    console.log("return: ", [...quickSort(lo), pivot, ...quickSort(hi)]);

    console.log("_____________");



    //Recursively call quickSort() on the created subarrays.
    return [...quickSort(lo), pivot, ...quickSort(hi)];


};



// quickSort([1, 6, 1, 5, 3, 2, 1, 4]); // [1, 1, 1, 2, 3, 4, 5, 6]