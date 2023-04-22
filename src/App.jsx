import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Auth";
import Home from "./Components/Home/Home";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./Components/Auth/firebase-config";

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [gifs, setGifs] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setIsLoggedIn(currentUser != null);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} gifs={gifs} setGifs={setGifs} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
