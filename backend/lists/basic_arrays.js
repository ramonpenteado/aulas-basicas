const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const selectedNumber = [2, 4, 5, 9]

function logOnlyEvenNumbers(numberList) {
  for (i = 0; i < numberList.length; i++) {
    if (numberList[i] % 3 === 0) {
      console.log(numberList[i])
    }
  }
}

function removeSelectedNumber(numberList, selectedNumber) {
  for (i = 0; i < numberList.length; i++) {
    for (j = 0; j < selectedNumber.length; j++) {
      if (numberList[i] === selectedNumber[j]) {
        numberList.splice(i, 1)
      }
    }
  }
  console.log(numberList)
}

// removeSelectedNumber(numberList, selectedNumber)
// console.log(numberList.concat(selectedNumber))


numberList.map(number => {
  if (number % 2 === 0) {
    console.log(number)
  }
})

selectedNumber.map(number => {
  if (number % 2 === 0) {
    console.log(number)
  }
})