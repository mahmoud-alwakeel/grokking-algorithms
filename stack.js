// this is a normal example , just to learn about the inline stack, and because it's used in recursion
function greet(name) {
    console.log(`hello ${name}`) // the function greet is partially completed until the other function inside is done  
    greet2(name)
    console.log("getting ready to say good bye")
    bye()
}

function greet2(name) {
    console.log(`how are you ${name}`)
}

function bye() {
    console.log(`okay bye`)
}

greet("wakeel")

