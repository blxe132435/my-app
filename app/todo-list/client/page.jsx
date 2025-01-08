'use client'
console.log({"client": "client"});

async function getTodo() {
  const response = await fetch("https://pxng.online/todo-list");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
import { useEffect, useState } from 'react';
import style from "/app/loading.module.css";
import  "/app/loading.css";
export default function Page() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  const initTodo = async () => {
    setLoading(true);
    const result = await getTodo();
    setTodos(result);
    console.log("result:", result);
    setLoading(false);
  }
  useEffect(() => {
    initTodo();
  }, [])

  return (
    <>
    { loading ?
    <>
      <div className={style.box}>
      </div>
      <div className={style.green}>Loading...</div>
    </>


      :

      todos.data.map((todo, index) => (
        <div key={index}>
          {`id: ${todo.id} _ | _ . name: ${todo.name} _ | _ . status: ${todo.status}...>`}
        </div>
      ))

    }
    </>
  )
}