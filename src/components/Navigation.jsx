import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <div>
        
        <Link to="/user"><h1>user</h1></Link>
        <Link to="/create-user">create user</Link>
    </div>
  )
}

export default Navigation;