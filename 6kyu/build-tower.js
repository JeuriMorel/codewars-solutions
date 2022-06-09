// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
    const lengthOfEachFloor = nFloors * 2 - 1
    const tower = []

    for (let i = 0, blocks = 1; i < nFloors; i++, blocks += 2) {
        let emptySpace = " ".repeat((lengthOfEachFloor - blocks) / 2)
        let string = `${emptySpace}${"*".repeat(blocks)}${emptySpace}`
        tower.push(string)
    }

    return tower
}