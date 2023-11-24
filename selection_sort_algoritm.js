function findSmallest(arr) {
    let smallestInt = arr[0]
    let smallestIndex = 0

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallestInt) {
            smallestInt = arr[i]
            smallestIndex = i
        }
    }
    console.log(`smallest int: ${smallestInt}`)
    return smallestIndex
}

function selectionSort(arr) {
    let newArr = []
    let length = arr.length
    for (let i = 0; i < length; i++) {
        let smallestIndex = findSmallest(arr)
        newArr.push(arr.splice(smallestIndex, 1)[0]);
    }
    return newArr
}

console.log(selectionSort([5, 3, 6, 2, 10]))