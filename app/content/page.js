async function getUsers() {
  const response = await fetch("https://pxng.online/users")
  console.log("getUsers",response);
  return response.json();
}
export default async function Page() {
  const users = await getUsers();
  console.log("users",users.data[0]);
  return (
    <div>
      users
      <h1>{users.data[0].name}</h1>
    </div>
    )
}