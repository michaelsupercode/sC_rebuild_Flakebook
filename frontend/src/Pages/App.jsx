import { useState } from 'react';
import './App.css';
import JoinFlakebookForm from '../components/JoinFlakebookForm';
import UserList from '../components/UserList';

function Home() {
  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <h1>Flakebook</h1>

      <h2>Join Flakebook</h2>
      <JoinFlakebookForm setUsers={setUsers} />

      <h2>today's actual User List</h2>
      <UserList setUsers={setUsers} users={users}/>
    </div>
  );
}

export default Home;
