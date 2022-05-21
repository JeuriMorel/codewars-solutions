// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil



function nextBigger(n) {
    let digits = ("" + n).split("")
    if (digits.length == 1) return -1

    let indexToMoveToEnd

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < digits[i + 1]) {
            indexToMoveToEnd = i
            break
        }
    }

    let indexToMoveToBeginning = indexToMoveToEnd + 1

    for (let i = indexToMoveToEnd + 1; i < digits.length; i++) {
        if (
            digits[i] > digits[indexToMoveToEnd] &&
            digits[i] < digits[indexToMoveToBeginning]
        ) {
            indexToMoveToBeginning = i
        }
    }

    if (indexToMoveToEnd == undefined) {
        return -1
    }

    ;[digits[indexToMoveToEnd], digits[indexToMoveToBeginning]] = [
        digits[indexToMoveToBeginning],
        digits[indexToMoveToEnd],
    ]

    let digitsAsString = digits.join("")

    let rearranged =
        digitsAsString.substring(0, indexToMoveToEnd + 1) +
        digitsAsString
            .substring(indexToMoveToEnd + 1)
            .split("")
            .sort()
            .join("")

    return +rearranged
}
