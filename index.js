let counter = 0

function incrementVariable(number) {
    console.log(number)
    if (number < 15000) {
        incrementVariable(number+1)
    }
}
incrementVariable(0)
