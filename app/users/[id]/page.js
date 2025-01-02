export default function Page({ params }) {
  console.log("params", params);
  return (
    <div>
      <loading />
      <h1>Page users</h1>
      <h1>id: {params.id}</h1>
    </div>
  )
}