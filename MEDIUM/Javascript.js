
// function that prints the amount of pizza slices each person gets

const sharePizza = (slices, people) => {
    return `Each person gets ${(slices/people).toFixed(2)} slices of pizza; from our ${slices} slice pizza`
}
console.log(sharePizza(8,3))