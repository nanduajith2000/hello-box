import "./App.css";
import Button from "./Components/Button";
import React, { useState } from "react";
import DigitalClock from "./Components/Clock";
import Box from "./Components/Box";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";

function App() {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState("Say hi");

  const [message, setMessage] = useState(null);
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="clock" element={<DigitalClock />}></Route>
        <Route
          path="/"
          element={
            <>
              <Button
                clicked={clicked}
                setClicked={setClicked}
                text={text}
                setText={setText}
              />
              <Box
                clicked={clicked}
                text={text}
                message={message}
                setMessage={setMessage}
              />
            </>
          }
        ></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
