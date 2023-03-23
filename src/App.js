import React, {useState} from 'react';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserListHandler = (uName, uAge) => {
    setUsersList((pravUsersList) => {
      return (
        [...pravUsersList,{ name: uName, age: uAge , id: Math.random.toString()}]
      )
    })
  };

  return (
    <div>
      <AddUsers onAddUser={addUserListHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
