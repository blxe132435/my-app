export function GET(req, {params} ) {
  console.log("5555555",params);
  return Response.json({
    status: 200,
    message: "test api",
    data: `I luv U ${params.slug || ""}`
  })
}