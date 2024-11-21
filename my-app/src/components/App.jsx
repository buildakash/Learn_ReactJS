import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  )

}

export default App;
