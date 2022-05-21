// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].



snail = function (array) {
    if (array == [[]]) return []
    if (array.length == 1) return array[0]
    let final = []

    let minX = 0
    let minY = 0
    let maxX = array.length - 1
    let maxY = array.length - 1

    for (let i = 0; i < array.length / 2; i++) {
        for (let x = minX; x <= maxX; x++) {
            final.push(array[minY][x])
        }
        minY++
        for (let y = minY; y <= maxY; y++) {
            final.push(array[y][maxX])
        }
        maxX--
        for (let x = maxX; x >= minX; x--) {
            final.push(array[maxY][x])
        }
        maxY--
        for (let y = maxY; y >= minY; y--) {
            final.push(array[y][minX])
        }
        minX++
    }

    return final
}