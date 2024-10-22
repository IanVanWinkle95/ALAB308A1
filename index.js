let counter = 0

function incrementVariable(number) {
    console.log(number)
    if (number < 15000) {
        incrementVariable(number+1)
    }
}
try {
    incrementVariable(0)
} catch (error) {
    console.error("An error has occurred!", error)
    console.log("Value of the counter:", counter)
}

