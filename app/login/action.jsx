'use server'
console.log('use server')

import { SignJWT, importJWK } from "jose"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function Login(prevState, formData) {
  const Email = formData.get('email')
  const Password = formData.get('password')

  if ( Email == '' ) {
    return { message: 'Login failed' }
  }
  // else {
  //   return { message: "" }
  // }
    console.log(Email, Password);
  const secretJWK = {
    kty: 'oct',
    k: "123"
  }
  const secretKey = await importJWK(secretJWK, 'HS256')
  const token = await new SignJWT({ Email })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(secretKey)

  console.log(token)
  cookies().set('token', token)

  redirect("/todo-list")
}