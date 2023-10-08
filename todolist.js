//collect user input and store it in a variable
let input = prompt('What would you like to do?').trim();

//create an empty array to hold the todo items
const todos = ['spend 1 hour on my Javascript course', 'sleep for 30 minutes', 'pickup Eliora and Orzora']

//while the input is not quit or q continue to run the prompt
while (input !== 'quit' && input !== 'q') {

  //implement the list. Loop through an array of todos
  if (input === 'list') {
    console.log('*******');
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log('*******');
  } else if (input === 'new') { // create a new item
    const newTodo = prompt('Okay, what is your todo item?').trim();
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`)
  } else if (input === 'delete') {
    const index = parseInt(prompt('Enter an index to delete'));

    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Deleted: ${deleted[0]}`);
    } else {
      console.log('Unknown index')
    }

  }
  input = prompt('What would you like to do?').trim();
}

console.log('Okay, you opted to Quit the App!')