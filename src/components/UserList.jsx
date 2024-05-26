import { useEffect, useState } from 'react';
//import { getUsers } from '../api/users.api';

export const UserList = () => {
    /*
    const [users, setUsers] = useState([]);
    useEffect(() => {
        

       async function fetchData() {
            const response  = await getUsers();
            setUsers(response.data);
            
        }
        fetchData()
    }, []);
*/

  return (
    <div>
        {/*}
        {users.map((user) => (
            <div key={user.user_id}>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
            </div>
        ))}*/}
    </div>
  )
}

export default UserList;
