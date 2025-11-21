// async

// async (params) => {};

async function logName() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => response.json());
}

const todo = await logName();
console.log(todo);
