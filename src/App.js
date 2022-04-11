import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Second from "./pages/Second";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/second/:id" element={<Second />} />
      </Routes>
    </Router>
  );
}

export default App;
