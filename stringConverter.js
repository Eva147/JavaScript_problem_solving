function strConverter (str) {
    const symbols = str.split('')
    const convStr = []
    // The unshift() method adds new elements to the beginning of an array.
    symbols.forEach(symbol => convStr.unshift(symbol))
    return convStr.join('')

}

console.log(strConverter('My name is Eugenie!'))