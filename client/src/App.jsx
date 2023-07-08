import { useState, useEffect } from "react"

function App() {

  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);

  const handleForm = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/demo", {
      method: 'POST',
      body: JSON.stringify(form),     //In network, we send it through strings
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    console.log(data);
    
    getUsers();
  }

  const getUsers = async () => {

    const response = await fetch("http://localhost:8000/demo", {
      method: 'GET'
    });

    const data = await response.json();
    
    setUsers(data);
  }

  useEffect(()=>{
    getUsers();
  }, [])

  return (
    <>
      <div>

        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>User Name :</label>
          <input type="text" id="username" name="username" onChange={handleForm}></input>
          <br></br>
          <label htmlFor='password'>Password :</label>
          <input type="password" id="password" name="password" onChange={handleForm}></input>
          <br></br>
          <input type="submit"/>
        </form>

        <div>
          <ul>
            {users.map((user) => 
              {
                return <li key={user._id}>{user.username}, {user.password}</li>
              }
            )}
          </ul>
        </div>

      </div>
    </>
  )
}

export default App
