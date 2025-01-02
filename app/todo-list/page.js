'use server';
console.log({"server": "server"});


async function getTodo() {
  const response = await fetch("https://pxng.online/todolist");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default async function Page() {
  const todo = await getTodo();
  console.log({ todo: todo });
  return (
    <div>
      <h1>Todo-List</h1>
      <br />
      {
        todo.data.map((todo, index) => (
      <div key={index}>
        {`id: ${todo.id} _ | _ . name: ${todo.name} _ | _ . status: ${todo.status}...>`}
      </div>
      ))
      }
    </div>
  )
}