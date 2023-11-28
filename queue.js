const createQueue = () => {
    const queue = [];

    const enqueue = (element) => queue.push(element)

    const dequeue = (element) => {
        if (isEmpty()) {
            return "underflow"
        } else {
            queue.shift(element)
        }
    }

    const front = () => {
        if (isEmpty()) {
            return "queue is empty"
        } else {
            return queue[0]
        }
    }

    const isEmpty = () => queue.length === 0

    const size = () => queue.length;

    return {
        enqueue,
        dequeue,
        front,
        isEmpty,
        size
    }
}

const queue = createQueue()

queue.enqueue("weka")
queue.enqueue("rana")
queue.enqueue("muhab")
queue.enqueue("aly")

console.log("Front element:", queue.front());
console.log("size:", queue.size());
queue.dequeue()
console.log("----- dequed first element -----");
console.log("First element:", queue.front());
console.log("size:", queue.size());
