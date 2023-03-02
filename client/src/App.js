import { useEffect, useState } from "react";
import "./App.css";
import Posts from "./components/Posts";
import Users from "./components/Users";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const urlPosts = "http://localhost:3001/posts";
  const urlUsers = "http://localhost:3001/users";

  const getDataPosts = async () => {
    try {
      const response = await fetch(urlPosts);
      const data = await response.json();
      if (response.ok) {
        setPosts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDataUsers = async () => {
    try {
      const response = await fetch(urlUsers);
      const data = await response.json();
      if (response.ok) {
        setUsers(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataPosts();
    getDataUsers();
  }, []);

  return (
    <div className="App">
      <Posts posts={posts} />
      <Users users={users} />
    </div>
  );
}

export default App;
