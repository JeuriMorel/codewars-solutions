// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    return str
        .split(" ")
        .map(item => {
            if (/[a-z]/i.test(item))
                return `${item.substring(1)}${item.charAt(0)}ay`
            return item
        })
        .join(" ")
}
