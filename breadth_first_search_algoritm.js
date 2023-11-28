const graph = {};
graph["you"] = ["Alice", "bob", "Claire"];
graph["bob"] = ["anuj", "Peggy"];
graph["Alice"] = ["Peggy"];
graph["Claire"] = ["tom", "Johnny"];
graph["anuj"] = [];
graph["Peggy"] = [];
graph["tom"] = [];
graph["Johnny"] = [];

const search = (name) => {
    const searchQueue = [];
    // Using spread operator searchQueue will contain individual elements: ["Alice", "bob", "Claire"], all of your neighbors
    searchQueue.push(...graph[name]);
    const searched = [];

    while (searchQueue.length !== 0) {
        const person = searchQueue.shift();
        if (!searched.includes(person)) {
            if (personIsSeller(person)) {
                console.log(person + " is a mango seller");
                return true;
            } else {
                searchQueue.push(...graph[person]);
                searched.push(person);
            }
        }
    }
    return false;
};

const personIsSeller = (person) => {
    return person.endsWith("m");
};

search("you");
