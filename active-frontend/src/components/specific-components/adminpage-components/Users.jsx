import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Make a GET request to your backend endpoint to fetch users
        const response = await axios.get('/auth/users'); // Replace with your actual backend endpoint
        console.log('API Response:', response.data); // Log the response to check its structure

        // Check if the response contains an array of users
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else if (response.data && response.data.users) {
          // Handle case where response contains a 'users' property
          setUsers(response.data.users);
        } else {
          console.error('Invalid API response:', response.data);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className='text-2xl font-jost mb-4'>Users</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
            // Replace 'name' with the property you want to display for each user
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
