import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ViewProject from "./components/ViewProject";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewproject" element={<ViewProject />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
