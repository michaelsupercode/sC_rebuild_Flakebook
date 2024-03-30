import { useState } from 'react';
import './App.css';
import JoinFlakebookForm from '../components/JoinFlakebookForm';
import UserList from '../components/UserList';

function Home() {
  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <h1>Ahmed's Flakebook</h1>

      <h2>..join his Flakebook community..</h2>
      <JoinFlakebookForm setUsers={setUsers} />

      <h2>our user list</h2>
      <UserList setUsers={setUsers} users={users}   />
    </div>

  );
}

export default Home;
