import { useState } from "react";
import { Routes } from "react-router-dom";
import Navbar from './Navbar';
// import Login from "./Login";
// import SignUp from "./Signup";
import Home from "./Home";
import './App.css';
import About from "./About";

function App() {
  const [user,setUser] = useState(null);

  return (
    <div className="App">
      <Navbar
        user={user} setUser={setUser}
      />
      <main>
        {user ? (
          <Routes>
            <Routes path="/">
              <Home user={user} />
            </Routes>
          </Routes>
        ) : (
          <Routes>
            <Routes path="/signup">
              <SignUp setUser={setUser} />
            </Routes>
            <Routes path="/login">
              <Login setUser={setUser} />
            </Routes>
            <Routes path="/about">
              <About setUser={setUser} />
            </Routes>
            <Routes path="/">
              <Home user={user} />
            </Routes>
          </Routes>
        )}
      </main>
    </div>
  );
}

export default App;
