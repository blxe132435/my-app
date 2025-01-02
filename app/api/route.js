export function GET() {
  console.log("GOT");
  return Response.json({
    status: 200,
    message: "Index api",
    data: "I luv U"
  })
}