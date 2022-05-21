// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.



function sumIntervals(intervals) {
    let sortedArrays = intervals.sort(([a, b], [c, d]) => {
        return a - c
    })

    function mergeArrays(array) {
        let returnArray = []
        let min = array[0][0]
        let max = array[0][1]

        for (let i = 0; i <= array.length - 1; i++) {
            if (i == array.length - 1) {
                returnArray.push([min, Math.max(max, array[i][1])])
                continue
            }
            if (max >= array[i + 1][0]) {
                max = Math.max(max, array[i + 1][1])
                continue
            }
            returnArray.push([min, max])
            min = array[i + 1][0]
            max = array[i + 1][1]
        }
        return returnArray
    }

    return mergeArrays(sortedArrays).reduce((accu, curr) => {
        return accu + (curr[1] - curr[0])
    }, 0)
}
