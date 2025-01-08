'use client'
console.log("use client");

import { useFormState } from "react-dom"

import { Login } from "./action";

function Page() {
  const initState = {
    message: 'Login pass'
  }

  const [state, formAction] = useFormState(Login, initState)
  return (
    <>
      <form action={formAction}>
        <label for="email">Email:</label><br />
        <input type="email" name="email" id="inpEmail" placeholder="Email" /><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" name="password" id="inpPassword" placeholder="Password" /><br />
        Message: {state.message} <br />
        <input className="w-2/12 bg-green-500 hover:bg-green-600" type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Page