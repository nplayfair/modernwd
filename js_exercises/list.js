var todos = ["Buy turtle", "Take over world"];

var input = prompt("What would you like to do?");


while(input !== "quit") {
	//handle input
	if (input === "list") {
		console.log("********");
		todos.forEach(function(todo, index){
			console.log(index + ": " + todo);
		});
		console.log("********");
} else if (input === "new") {
	//ask for new
	var newTodo = prompt("Enter new entry");
	todos.push(newTodo);
	console.log("Added item");
} else if (input === "delete") {
	//ask for index for deletion
	var index = prompt("Enter index to delete:");
	//delete item
	todos.splice(index, 1);
	console.log("Deleted item");
}

	//ask again
	var input = prompt("What would you like to do?");
}
console.log("OK bye!");