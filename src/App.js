import React from 'react';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';


function App() {
  return (
    <div>
      <AddUsers/>
      <UserList users={[]}/>
    </div>
  );
}

export default App;
