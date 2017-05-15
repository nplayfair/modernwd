var todos = ["Buy turtle", "Take over world"];

var input = prompt("What would you like to do?");


while(input !== "quit") {
	//handle input
	if (input === "list") {
		listTodos();
} else if (input === "new") {
	//ask for new
	addTodo();
} else if (input === "delete") {
	deleteTodo();
}
	//ask again
	var input = prompt("What would you like to do?");
}
console.log("OK bye!");


// Functions

function listTodos() {
	console.log("********");
	todos.forEach(function(todo, index){
		console.log(index + ": " + todo);
	});
	console.log("********");
}

function addTodo() {
	var newTodo = prompt("Enter new entry");
	todos.push(newTodo);
	console.log("Added item");
}

function deleteTodo() {
	//ask for index for deletion
	var index = prompt("Enter index to delete:");
	//delete item
	todos.splice(index, 1);
	console.log("Deleted item");
}