import { NextResponse } from "next/server";
import { jwtVerify, importJWK } from "jose"


export async function middleware(request) {
  try {
  const token = request.cookies.get("token").value
  const secretJWK = {
    kty: "oct",
    k: "123"
  }
  const secretKey = await importJWK(secretJWK, 'HS256')
  const { payload } = await jwtVerify(token, secretKey)
  console.log(payload);
  if (payload.Email != "chahoom9@gmail.com") {
    throw new Error("err")
  }
  return NextResponse.next();
  } catch (err) {
    console.error({ error: err });
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/todo-list/:path*"
}