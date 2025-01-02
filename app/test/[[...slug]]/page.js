export default function page({params}) {
  return (
    <div>
      <h1>Page test</h1>
      <h1>id: {params.slug[0]}</h1>
      <h1>name: {params.slug[1]}</h1>
      <h1>ALL OF SLUG:  { params.slug }</h1>
    </div>
  )
}