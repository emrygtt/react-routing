import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const UserDetail = () => {

  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((data) => setUser(data))
  }, [id])
  
  return (
    <div>
      <h2>Kullanıcı Detayları</h2>
      {user &&
        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>
      }
      <Link to={`/users/${Number(id) + 1 }`}>Sonraki Kullanıcı</Link>
    </div>
  )
}

export default UserDetail