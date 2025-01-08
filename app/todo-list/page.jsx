'use server';
console.log({"server": "server"});
import { Suspense } from "react";

async function getTodo() {
  const response = await fetch("https://pxng.online/todo-list");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default async function Page() {
  const todo = await getTodo()
  return (
    <>
    <Suspense fallback={<p>Loading todo...</p>}>
      <h1>Todo-List</h1>
      
      

    <div>
      <br />
      {
        todo.data.map((todo, index) => (
          <div key={index}>
        {`id: ${todo.id} _ | _ . name: ${todo.name} _ | _ . status: ${todo.status}...>`}
      </div>
      ))
    }
    </div>
    </Suspense>
    </>
  )
}