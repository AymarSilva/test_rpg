import { BrowserRouter as Roteador, Routes, Route } from "react-router-dom";
import Main from "./views/main";
import React from "react";

const App = () => {
  return (
    <Roteador>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </Roteador>
  );
};

export default App;
