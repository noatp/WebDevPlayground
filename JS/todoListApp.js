let userInput = prompt("What would you like to do?")
const todos = []

while (userInput !== 'quit') {
    switch (userInput) {
        case "new":
            const newToDo = prompt("What do you want to add to the list?")
            todos.push(newToDo)
            console.log(`Added ${newToDo} to the list`)
            break;
        case "list":
            console.log("Here is your TODO list")
            for (let todo of todos) {
                console.log(`${todos.indexOf(todo)}: ${todo}`)
            }
            break;
        case "delete":
            const targetIndex = parseInt(prompt("Please enter the index of the entry you want to remove from the list!"))
            if (!Number.isNaN(targetIndex) && (0 <= targetIndex && targetIndex < todos.length)) {
                let deleted = todos.splice(targetIndex, 1)
                console.log(`Successfully removed ${deleted} from the list`)
            }
            else {
                console.log("You entered an invalid index!")
            }
            break;
        default:
            break;
    }
    userInput = prompt("What would you like to do?")
}
console.log("Goodbye!")