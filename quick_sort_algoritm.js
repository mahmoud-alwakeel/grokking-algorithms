function quickSort(array) {
    if (array.length < 2) {
        return array
    } else {
        let pivot = array[0]
        let smaller = []
        let larger = []
        for (let i = 1; i < array.length; i++) {
            if (array[i] < pivot) {
                smaller.push(array[i])
            } else {
                larger.push(array[i])
            }
        }
        // recursive call
        return quickSort(smaller).concat([pivot], quickSort(larger))
    }
}
console.log(quickSort([10, 12, 1, 9, 11]))