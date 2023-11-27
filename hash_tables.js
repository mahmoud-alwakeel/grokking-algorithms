/*
In JavaScript, you can implement hash tables using objects or the Map object. 
*/

let voted = {}

function checkVoter(namee) {
    if (voted[namee]) {
        console.log("kick him out")
    } else {
        voted[namee] = true
        console.log("let them vote")
    }
}

checkVoter("wakeeel")
checkVoter("hazem")
checkVoter("mohamed")
checkVoter("mohand")
checkVoter("wakeeel")


// Using Objects:

let hashTable = {}

hashTable["apple"] = 0.99
hashTable["banana"] = 0.90
hashTable["orange"] = 1.20
hashTable["mango"] = 0.60

console.log(hashTable)
/* 
Objects in JavaScript use a hash map-like structure internally, 
making them efficient for most use cases. However, they have limitations
when it comes to handling non-string keys and iterating over keys.
*/

// using Map Object:

let hashMap = new Map();

hashMap.set("weka", 1);
hashMap.set("aly", 2);
hashMap.set("ahmed", 3);
hashMap.set("menna", 4);
hashMap.set("esraa", 5);
hashMap.set("esraa", 6);

console.log(hashMap)


