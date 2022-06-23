import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Users = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setUsers(data))
  }, [])
  
  return (
    <div>
      <h2>KULLANICILAR</h2>
      <ul>
        {users.map((user) => (
          <li>
            <Link to={`${user.id}`}>{user.name}</Link>
          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default Users